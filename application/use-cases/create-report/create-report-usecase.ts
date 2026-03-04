import { Report } from "../../../domain/entity/report";
import { ReportRepository } from "../../../domain/repository/report-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreateReportInput } from "./create-report-input";

export class CreateReportUseCase { 
    private ReportRepository: ReportRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.ReportRepository = repositoryFactory.createReportRepository();
    }
    
    async execute(input: CreateReportInput) {
        if (!input.report) {
            throw new Error('Report não informado');
        }

        const finance = new Report(input.report);
        await this.ReportRepository.create(finance);

        return {};
    }
}