import { FinanceRepository } from "./finance-repository";
import { ReportRepository } from "./report-repository";

export interface RepositoryFactory {
    createFinanceRepository(): FinanceRepository;
    createReportRepository(): ReportRepository;
}