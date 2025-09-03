export class Animal {
    constructor(protected name: string) { } //protected es un private con herencia y solo se puede utilizar de forma interna, es decir, entre padres e hijos

    move() {
        console.log('Moving along!');
    }

    greeting() {
        console.log(`Hello, my name is ${this.name}`);// puede usar this porque está dentro de la clase
    }

    protected doSomething() {
        console.log('dooo');// no es accesible desde fuera, Estrella, pero sí desde la clase hija, Dog
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
            console.log(`Woof! ${this.name}`); //si fuera private el this daría error
        }

        this.doSomething();
    }

    move() {
        console.log('Moving as a dog'); //redifine el comportamiento de move
        super.move(); //super para reutilizar el comportamiento padre
    }
}

const Estrella = new Dog('Estrella', 'Lolo');
//Estrella.name = 'otro nombre'; (prohibido)
Estrella.woof(1);
//Estrella.doSomething(); (prohibido)
Estrella.move(); //polimorfismo: muestra primero el comportamiento nuevo y después el heredado
