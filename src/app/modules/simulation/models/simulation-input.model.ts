export interface SimulationInput {
  cM: number; // corderos
  cF: number; // corderas
  bM: number; // borregos
  bF: number; // borregas
  o: number; // ovejas
  p: number; // padrotestotal animales
  rmh?: number; // Relación macho/hembra (1/25
  indn?: number; // Índice de natalidad (número de partos por año)
  mc?: number; // mortMortalidad en crías (%)
  ma?: number; //Mortalidad en adultos (%)
  e?: number; //Eliminaciones (%)
  r?: number; //Reemplazo (%)
}
