import Chromosome from '../chromosome';

export default interface UserConfig {
    fitnessFunction: (chromosome: Chromosome) => number;
    selectionFunction?: (chromosomes: Chromosome[]) => Chromosome[];
    crossOverFunction?: (chromosomes: Chromosome[]) => Chromosome[];
    mutationFunction?: (chromosome: Chromosome, possibleGenes: (number | string)[]) => Chromosome;
    populationSize?: number;
    chromosomeLength?: number;
    possibleGenes?: (number | string)[];
    mutationChance?: number;
}
