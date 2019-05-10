import GeneticAlgorithm from './geneticAlgorithm';
import UserConfig from './config/userConfig';

export default (config: UserConfig): GeneticAlgorithm => new GeneticAlgorithm(config);
