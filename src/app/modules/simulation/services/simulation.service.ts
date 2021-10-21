import { Injectable } from '@angular/core';
import { KindResult } from '../models/kind-result.model';
import { Results } from '../models/results.model';
import { SimulationInput } from '../models/simulation-input.model';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor() {}

  makeSimulations(input: SimulationInput): Results[] {
    const {
      cM, // corderos
      cF, // corderas
      bM, // borregos
      bF, // borregas
      o, // ovejas
      p, // padrotes
      rmh = 1, // relacion macho hembra
      indn = 0, // indice de natalidad
      mc = 0, // mortalidad crias
      ma = 0, // mortalidad adultos
      e = 0, // eliminaciones
      r = 0, // reemplazo
    } = input;

    // TODO calcular aqui la relacion macho hembra...

    const indiceMortalidadCrias = mc / 100;
    const indiceMortalidadAdultos = ma / 100;
    const indiceReemplazo = r / 100;
    const indiceEliminacion = e / 100;

    let actualResult: Results = {
      cM,
      cF,
      bM,
      bF,
      o,
      p,
    };

    const results: Results[] = [];

    for (let index = 0; index < 10; index++) {
      actualResult = this.calculateResult(
        actualResult.o,
        actualResult.p,
        actualResult.bF,
        actualResult.bM,
        actualResult.cF,
        actualResult.cM,
        indn,
        indiceMortalidadCrias,
        indiceMortalidadAdultos,
        indiceReemplazo,
        indiceEliminacion
      );

      results.push(actualResult);
    }

    return results;
  }

  //?? CORDERO -> BORREGO -> OVEJA/PADROTE
  calculateResult(
    ovejas: number,
    padrotes: number,
    borregas: number,
    borregos: number,
    corderas: number,
    corderos: number,
    indiceNatalidad: number,
    mortalidadCrias: number,
    mortalidadAdultos: number,
    indiceReemplazo: number,
    indiceEliminacion: number
  ): Results {
    const totalNacidos = ovejas * indiceNatalidad;

    const hembrasNacidas = totalNacidos * 0.5 + corderas; //? Esto es relacion macho/hembra?
    const machosNacidos = totalNacidos - hembrasNacidas + corderos;

    const muertesCriasHembras = hembrasNacidas * mortalidadCrias;
    const muertesCriasMachos = machosNacidos * mortalidadCrias;

    const muertesAdultosHembras = ovejas * mortalidadAdultos;
    const muertesAdultosMachos = padrotes * 0; //? preguntar por la mortalidad de hombres

    let hembrasAdultasResultantes = ovejas - muertesAdultosHembras;
    let machosAdultosResultantes = padrotes - muertesAdultosMachos;

    let hembrasCriasResultantes = hembrasNacidas - muertesCriasHembras;
    let machosCriasResultantes = machosNacidos - muertesCriasMachos;

    const cantidadATraspaso = hembrasCriasResultantes * indiceReemplazo;

    const cantidadBorregas = hembrasCriasResultantes * 0.1;
    const cantidadBorregos = machosCriasResultantes * 0.1;

    hembrasAdultasResultantes += cantidadATraspaso;
    hembrasCriasResultantes -= cantidadATraspaso;
    machosAdultosResultantes++;
    machosCriasResultantes--;

    const hembrasEliminadas = ovejas * indiceEliminacion;
    hembrasAdultasResultantes -= hembrasEliminadas;

    return {
      cM: machosCriasResultantes - cantidadBorregos,
      cF: hembrasCriasResultantes - cantidadBorregas,
      bM: cantidadBorregos,
      bF: cantidadBorregas,
      o: hembrasAdultasResultantes,
      p: machosAdultosResultantes,
    };
  }
}
