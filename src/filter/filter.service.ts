import { Injectable } from '@nestjs/common';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/Client.entity';
import { Accounting } from 'src/entities/Accounting.entity';
import { Business } from 'src/entities/Business.entity';
import { Healthcare } from 'src/entities/Healthcare.entity';

@Injectable()
export class FilterService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Accounting)
    private readonly accountingRepository: Repository<Accounting>,
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
    @InjectRepository(Healthcare)
    private readonly healthcareRepository: Repository<Healthcare>,
  ) {}

  async applyFilters(query: any) {
    const { queries } = query;

    let combinedResults: any[] = [];

    for (let i = 0; i < queries.length; i++) {
      const { entity, filters, relation } = queries[i];

      let queryBuilder: SelectQueryBuilder<any>;

      switch (entity) {
        case 'client':
          queryBuilder = this.clientRepository.createQueryBuilder('client');
          break;
        case 'accounting':
          queryBuilder = this.accountingRepository.createQueryBuilder('accounting');
          break;
        case 'business':
          queryBuilder = this.businessRepository.createQueryBuilder('business');
          break;
        case 'healthcare':
          queryBuilder = this.healthcareRepository.createQueryBuilder('healthcare');
          break;
        default:
          throw new Error(`Unknown entity: ${entity}`);
      }

      // Apply filters to the query builder
      filters.forEach((filter) => {
        const { field, operation, values } = filter;
        this.applyFilter(queryBuilder, field, operation, values);
      });

      // Execute the query and get the results
      const results = await queryBuilder.getMany();

      console.log("results are",results)

      // If this is the first query, initialize combinedResults
      if (i === 0) {
        combinedResults = results; // Store entire results
      } else {
        // Combine results based on the relation with the previous query
        combinedResults = this.combineResults(combinedResults, results, queries[i - 1].relation);
      }
    }

    return combinedResults; // Final combined results based on AND/OR operations
  }

  private applyFilter(queryBuilder: SelectQueryBuilder<any>, field: string, operation: string, values: any[]) {
    const formattedField = `${queryBuilder.alias}.${field}`; // Ensure to prefix with alias

    switch (operation) {
      case 'is':
        queryBuilder.andWhere(`${formattedField} = :value`, { value: values[0] });
        break;
      case 'in':
        queryBuilder.andWhere(`${formattedField} IN (:...values)`, { values });
        break;
      case 'between':
        queryBuilder.andWhere(`${formattedField} BETWEEN :start AND :end`, {
          start: values[0],
          end: values[1],
        });
        break;
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
  }

  private combineResults(previousResults: any[], currentResults: any[], relation: 'AND' | 'OR' | null) {
    if (relation === 'AND') {
      // For AND, we filter to keep only the records that are in both sets
      return previousResults.filter(prevItem => 
        currentResults.some(currItem => currItem.id === prevItem.id)
      );
    } else if (relation === 'OR') {
      // For OR, we combine unique records from both sets
      const combinedMap = new Map();

      previousResults.forEach(item => combinedMap.set(item.id, item)); // Add previous results
      currentResults.forEach(item => combinedMap.set(item.id, item)); // Add current results

      return Array.from(combinedMap.values()); // Return unique records
    } else {
      // If relation is null (last query), just return the current results
      return currentResults;
    }
  }
}
