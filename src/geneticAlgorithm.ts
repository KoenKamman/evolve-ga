import Chromosome from './chromosome';
import UserConfig from './userConfig';
import { defaultConfig } from './defaultConfig';
import { Gene } from './typeAliases';
import Config from './config';

export default class GeneticAlgorithm {
    private config: Config;
    private population: Chromosome[];

    public constructor(config: UserConfig) {
        this.config = { ...defaultConfig, ...config };
        this.population = [];
    }

    public run(): Chromosome[] {
        this.repopulate();
        this.calculateFitness();
        return this.population;
    }

    private repopulate(): void {
        if (this.population.length === 0) {
            this.population = this.generateRandomPopulation(
                this.config.populationSize,
                this.config.chromosomeLength,
                this.config.possibleGenes
            );
        } else {
            this.population = this.selectFittest(this.population);
            let offspring = this.crossOver(this.population);
            let mutatedOffspring = this.mutate(offspring, this.config.possibleGenes);
            this.population = [...this.population, ...mutatedOffspring];
        }
    }

    private generateRandomPopulation(
        populationSize: number,
        chromosomeLength: number,
        genes: Gene[]
    ): Chromosome[] {
        return [...Array(populationSize)].map((): Chromosome => {
            return {
                fitness: 0,
                genes: [...Array(chromosomeLength)].map((): Gene => {
                    return genes[Math.floor(Math.random() * genes.length)];
                })
            }
        });
    }

    private selectFittest(chromosomes: Chromosome[]): Chromosome[] {
        if (this.config.selectionFunction) {
            return this.config.selectionFunction(chromosomes);
        } else {
            return this.population
                .sort((a: Chromosome, b: Chromosome): number => b.fitness - a.fitness)
                .slice(0, (this.population.length) / 2);
        }
    }

    private calculateFitness(): void {
        if (this.config.fitnessFunction) {
            for (let i = 0; i < this.population.length; i++) {
                this.population[i].fitness = this.config.fitnessFunction(this.population[i]);
            }
        }
    }

    private crossOver(chromosomes: Chromosome[]): Chromosome[] {
        if (this.config.crossOverFunction) {
            return this.config.crossOverFunction(chromosomes);
        } else {
            let offspring: Chromosome[] = [];
            for (let i = 0; i < chromosomes.length; i++) {
                const crossOverPoint = Math.floor(Math.random() * chromosomes[i].genes.length);
                const parentA = chromosomes[Math.floor(Math.random() * chromosomes.length)];
                const parentB = chromosomes[Math.floor(Math.random() * chromosomes.length)];
                offspring[i] = {
                    fitness: 0,
                    genes: [...parentA.genes.slice(0, crossOverPoint), ...parentB.genes.slice(crossOverPoint)]
                }
            }
            return offspring;
        }
    }

    private mutate(chromosomes: Chromosome[], possibleGenes: Gene[]): Chromosome[] {
        let mutatedChromosomes: Chromosome[] = [];
        for (let i = 0; i < chromosomes.length; i++) {
            if (this.config.mutationChance > Math.random()) {
                if (this.config.mutationFunction) {
                    mutatedChromosomes[i] = this.config.mutationFunction(chromosomes[i], possibleGenes);
                } else {
                    let mutatedGenes = [...chromosomes[i].genes];
                    mutatedGenes[Math.floor(Math.random() * mutatedGenes.length)] = possibleGenes[
                        Math.floor(Math.random() * possibleGenes.length)
                    ];
                    mutatedChromosomes[i] = {
                        fitness: chromosomes[i].fitness,
                        genes: mutatedGenes
                    }
                }
            } else {
                mutatedChromosomes[i] = chromosomes[i];
            }
        }
        return mutatedChromosomes;
    }
}
