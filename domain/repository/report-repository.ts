import { Report } from "../entity/report";

export interface ReportRepository {
    getAll(): Promise<Report[]>;
    getById(id: string): Promise<Report>;
    create(report: Report): Promise<void>;
    update(report: Report): Promise<void>;
    delete(id: string): Promise<void>;
}