export class Animal {
    constructor(protected name: string) { } //protected es un private con herencia y solo se puede utilizar de forma interna

    move() {
        console.log('Moving along!');
    }

    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }

    protected doSomething() {
        console.log('dooo');
    }
}

export class Dog extends Animal {

    constructor(
        name: string,
        public owner: string
    ) {
        super(name);
    }

    woof(times: number): void {
        for (let index = 0; index < times; index++) {
            console.log(`Woof! ${this.name}`);
        }

        this.doSomething();
    }

    move() {
        //code
        console.log('Moving as a dog');
        super.move();
    }
}

const Estrella = new Dog('Estrella', 'Lolo');
//Estrella.name = 'otro nombre';
Estrella.woof(1);
//Estrella.doSomething();
Estrella.move();
