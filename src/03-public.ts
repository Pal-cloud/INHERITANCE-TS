export class MyDate {
    public year: number;
    public month: number;
    public day: number;
    
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month; 
        this.day = day;
    }

    public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
   }

    public add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') {
            this.day += amount;
        }
        if (type === 'months') {
            this.month += amount;
        }
        if (type === 'years') {
            this.year += amount;
        }
    }
}

//public si no se coloca ts lo interfiere sin necesidad de hacerlo explícito

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.day);
myDate.day = 12; //se puede modificar (mala práctica), se puede emplear readonly pero no deja modificar ni interna ni externamente
console.log(myDate.day);

