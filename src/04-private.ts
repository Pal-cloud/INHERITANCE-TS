export class MyDate {
    year: number;
    month: number;
    private day: number; //no deja imprimir ni modificar, protege la propiedad
    
    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month; 
        this.day = day;
    }

    printFormat(): string {
        const day = this.addPadding(this.day); //un método puede acceder a otro método de la misma clase
        const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
   }

   private addPadding(value: number) {
    if (value < 10) {
        return `0${value}`;
    }
    return `${value}`;
   }

    add(amount: number, type: 'days' | 'months' | 'years') {
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

    getDay() {
        return this.day;
    }
}


const myDate = new MyDate(1993, 7, 10);
console.log(myDate.printFormat());
//console.log(myDate.day); //error, no se puede acceder a la propiedad privada
console.log(myDate.getDay());
