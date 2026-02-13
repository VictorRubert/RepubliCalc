import { Finance } from "../entity/finance";

export interface FinanceRepository {
    getAll(): Promise<Finance[]>;
    getById(id: string): Promise<Finance>;
    create(finance: Finance): Promise<void>;
    update(finance: Finance): Promise<void>;
    delete(id: string): Promise<void>;
}