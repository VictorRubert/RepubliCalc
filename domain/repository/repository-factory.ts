import { FinanceRepository } from "./finance-repository";

export interface RepositoryFactory {
    createFinanceRepository(): FinanceRepository;
}