import { Gene, SelectionFunction, FitnessFunction, MutationFunction, CrossOverFunction } from './typeAliases';

export default interface Config {
    fitnessFunction: FitnessFunction | undefined;
    selectionFunction: SelectionFunction | undefined;
    crossOverFunction: CrossOverFunction | undefined;
    mutationFunction: MutationFunction | undefined;
    populationSize: number;
    chromosomeLength: number;
    possibleGenes: Gene[];
    mutationChance: number;
}
