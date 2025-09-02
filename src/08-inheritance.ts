export class Animal {
    constructor(public name: string) { }

    move() {
        console.log('Moving along!');
    }

    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

export class Dog extends Animal {

        constructor(
        name: string,
        public owner: string
    ) {
        super(name);        
    }

    woof(times: number) {
        for (let index = 0; index < times; index++) {
            console.log('Woof!');
        }
    }
}

const Bambu = new Animal('Bambu');
Bambu.move();
console.log(Bambu.greeting());

const Estrella = new Dog('Estrella', 'Lolo');
Estrella.move();
console.log(Estrella.greeting());
Estrella.woof(5);
console.log(Estrella.owner);
