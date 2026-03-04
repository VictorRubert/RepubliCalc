export class Report {
    private report: string;

    constructor(report: string){
        this.report = report
    }

    getId(): string {
        return this.report
    }
}