export class Animal {
    constructor(public name: string) { } //por defecto si no se especifíca todo es public

    move() {
        console.log('Moving along!'); //movimiento genérico de cualquier anima: ¡Avanzando!
    }

    greeting() {
        console.log(`Hello, my name is ${this.name}`);
    }
} /// hasta aquí construimos la clase animal (clase base)

export class Dog extends Animal { //aquí estamos construyendo la clase hija con extends (se extiende))

        constructor(
        name: string,
        public owner: string //owner es una propiedad propia de Dog (no existe en Animal). Importante: en TypeScript/JavaScript, si una clase hija tiene constructor, debe llamar a super() antes de usar this.
    ) {
        super(name);        
    }

    woof(times: number) {
        for (let index = 0; index < times; index++) { // empieza en cero, se ejecuta mientras, cada iteración +1
            console.log('Woof!');
        }
    }
}

const Bambu = new Animal('Bambu');
Bambu.move();
console.log(Bambu.greeting()); //crea un animal con nombre Bambu con dos métodos disponibles

const Estrella = new Dog('Estrella', 'Lolo'); //crea un perro con nombre Estrella y dueño Lolo, muestra métodos heredados más métodos propios: woof y owner
Estrella.move();
console.log(Estrella.greeting());
Estrella.woof(5);
console.log(Estrella.owner);
