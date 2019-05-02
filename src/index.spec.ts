import GeneticAlgorithm from './geneticAlgorithm';
import geneticAlgorithm from './index';

test('Export function which returns a GeneticAlgorithm instance', (): void => {
    expect(geneticAlgorithm()).toMatchObject(new GeneticAlgorithm());
});
