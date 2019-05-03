import Config from './config';

export const defaultConfig: Config = {
    fitnessFunction: undefined,
    selectionFunction: undefined,
    crossOverFunction: undefined,
    mutationFunction: undefined,
    populationSize: 10000,
    chromosomeLength: 100,
    possibleGenes: [0, 1, 2, 3],
    mutationChance: 0.1
}
