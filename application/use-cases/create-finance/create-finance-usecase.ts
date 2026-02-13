import { Finance } from "../../../domain/entity/finance";
import { FinanceRepository } from "../../../domain/repository/finance-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreateFinanceInput } from "./create-finance-input";

export class CreateFinanceUseCase { 
    private FinanceRepository: FinanceRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.FinanceRepository = repositoryFactory.createFinanceRepository();
    }
    
    async execute(input: CreateFinanceInput) {
        if (!input.finance) {
            throw new Error('Finance não informado');
        }

        const finance = new Finance(input.finance);
        await this.FinanceRepository.create(finance);

        return {};
    }
}