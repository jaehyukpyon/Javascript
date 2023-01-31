class Calculator {

    history = []; // instance m.

    get resultNum() {
        return this._resultNum;
    }

    set resultNum(number) {
        this._resultNum = number;
        this.history = [...this.history, number];
    }

    constructor(initialNumber) {
        this.initialNumber = initialNumber;
        this.resultNum = initialNumber;
    }

    sum(number) {
        this.resultNum += number;
    }

    substract(number) {
        this.resultNum -= number;
    }

    multiply(number) {
        this.resultNum *= number;
    }

    divide(number) {
        this.resultNum /= number;
    }

    undo() {
        this.resultNum = this.history[this.history.length - 2];
        this.history = this.history.slice(0, this.history.length - 2);
    }
}



console.dir(new Calculator());