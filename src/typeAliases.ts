import Chromosome from './chromosome';

export type Gene = (number | string);
export type FitnessFunction = (chromosome: Chromosome) => number;
export type SelectionFunction = (chromosomes: Chromosome[]) => Chromosome[];
export type CrossOverFunction = (chromosomes: Chromosome[]) => Chromosome[];
export type MutationFunction = (chromosome: Chromosome, possibleGenes: Gene[]) => Chromosome;
