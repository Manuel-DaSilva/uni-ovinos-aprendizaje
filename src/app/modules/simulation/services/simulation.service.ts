import { Injectable } from '@angular/core';
import { KindResult } from '../models/kind-result.model';
import { Results } from '../models/results.model';
import { SimulationInput } from '../models/simulation-input.model';

@Injectable({
  providedIn: 'root',
})
export class SimulationService {
  constructor() {}

  makeSimulation(input: SimulationInput): Results {
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

    const resC = this.calculateResultKind(
      cF,
      cM,
      indn,
      indiceMortalidadCrias,
      indiceMortalidadAdultos,
      indiceReemplazo,
      indiceEliminacion
    );
    const resB = this.calculateResultKind(
      bM,
      bF,
      indn,
      indiceMortalidadCrias,
      indiceMortalidadAdultos,
      indiceReemplazo,
      indiceEliminacion
    );
    const resO = this.calculateResultKind(
      o,
      p,
      indn,
      indiceMortalidadCrias,
      indiceMortalidadAdultos,
      indiceReemplazo,
      indiceEliminacion
    );

    const results: Results = {
      cM: resC.machos,
      cF: resC.hembras,
      bM: resB.machos,
      bF: resB.hembras,
      o: resO.machos,
      p: resO.hembras,
      total: resC.total + resB.total + resO.total,
    };

    return results;
  }

  calculateResultKind(
    totalHembras: number,
    totalMachos: number,
    indiceNatalidad: number,
    mortalidadCrias: number,
    mortalidadAdultos: number,
    indiceReemplazo: number,
    indiceEliminacion: number
  ): KindResult {
    if (totalHembras === 0 || totalMachos === 0) {
      return {
        machos: 0,
        hembras: 0,
        hembrasCrias: 0,
        total: 0,
      };
    }

    const totalNacidos = totalHembras * indiceNatalidad;

    const hembrasNacidas = totalNacidos * 0.5; //? Esto es relacion macho/hembra?
    const machosNacidos = totalNacidos - hembrasNacidas;

    const muertesCriasHembras = hembrasNacidas * mortalidadCrias;
    const muertesCriasMachos = machosNacidos * mortalidadCrias;

    const muertesAdultosHembras = totalHembras * mortalidadAdultos;
    const muertesAdultosMachos = totalMachos * 0; //? preguntar por la mortalidad de hombres

    let hembrasAdultasResultantes = totalHembras - muertesAdultosHembras;
    let machosAdultosResultantes = totalMachos - muertesAdultosMachos;

    let hembrasCriasResultantes = hembrasNacidas - muertesCriasHembras;
    let machosCriasResultantes = machosNacidos - muertesCriasMachos;

    const cantidadATraspaso = hembrasCriasResultantes * indiceReemplazo;

    hembrasAdultasResultantes += cantidadATraspaso;
    hembrasCriasResultantes -= cantidadATraspaso;
    machosAdultosResultantes++;
    machosCriasResultantes--;

    const hembrasEliminadas = totalHembras * indiceEliminacion;
    hembrasAdultasResultantes -= hembrasEliminadas;

    return {
      machos: machosAdultosResultantes,
      hembras: hembrasAdultasResultantes,
      hembrasCrias: hembrasCriasResultantes,
      total:
        //? incluir adultos ?
        hembrasAdultasResultantes +
        hembrasCriasResultantes +
        machosAdultosResultantes,
    };
  }
}
