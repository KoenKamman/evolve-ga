import { Gene, SelectionFunction, FitnessFunction, CrossOverFunction, MutationFunction } from './typeAliases';

export default interface UserConfig {
    fitnessFunction: FitnessFunction;
    selectionFunction?: SelectionFunction;
    crossOverFunction?: CrossOverFunction;
    mutationFunction?: MutationFunction;
    populationSize?: number;
    chromosomeLength?: number;
    possibleGenes?: Gene[];
    mutationChance?: number;
}
