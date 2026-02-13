import { FinanceRepository } from "../../domain/repository/finance-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateFinanceUseCase } from "../use-cases/create-finance/create-finance-usecase";

export class FinanceController {
    constructor(private repositoryFactory: RepositoryFactory, 
        private readonly financeRepository:FinanceRepository) {}


    async create(input: any){
        try {
            const createFinanceUseCase = new CreateFinanceUseCase(
                this.repositoryFactory
            );
            return await createFinanceUseCase.execute(input);
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }
}