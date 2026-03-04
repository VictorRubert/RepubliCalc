import { ReportRepository } from "../../domain/repository/report-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateReportUseCase } from "../use-cases/create-report/create-report-usecase";

export class ReportController {
    constructor(private repositoryFactory: RepositoryFactory, 
        private readonly reportRepository:ReportRepository) {}


    async create(input: any){
        try {
            const createReportUseCase = new CreateReportUseCase(
                this.repositoryFactory
            );
            return await createReportUseCase.execute(input);
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }
}