import GeneticAlgorithm from './geneticAlgorithm';
import index from './index';
import UserConfig from './config/userConfig';

test('Export function which returns a GeneticAlgorithm instance', (): void => {
    const config: UserConfig = {
        fitnessFunction: (): number => { return 0 }
    }
    expect(index(config)).toMatchObject(new GeneticAlgorithm(config));
});
