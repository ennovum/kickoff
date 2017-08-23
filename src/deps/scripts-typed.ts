function sum(...values: Array<number>): number {
    return values.reduce((result: number, value: number): number => (result + value), 0);
}

export {sum};
