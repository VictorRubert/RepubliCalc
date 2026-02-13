export class Finance {
    private finance: string;

    constructor(finance: string){
        this.finance = finance
    }

    getId(): string {
        return this.finance
    }
}