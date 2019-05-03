import GeneticAlgorithm from './geneticAlgorithm';
import UserConfig from './userConfig';

export default (config: UserConfig): GeneticAlgorithm => new GeneticAlgorithm(config);
