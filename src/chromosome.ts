import { Gene } from './typeAliases';

export default interface Chromosome {
    fitness: number;
    genes: Gene[];
}
