class Shape {
    private color: string;
    private filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    public getColor(): string {
        return this.color
    }

    public getFilled() {
        return this.filled
    }

    public setColor(value: string): void {
        this.color = value
    }

    public isFilled(): boolean {
        return this.filled;
    }

    public setFilled(filled: boolean): void {
        this.filled = filled;
    }

    public toString(): string {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    }
}
