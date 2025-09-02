// Ejemplo práctico: Sistema de Vehículos
// Este archivo demuestra herencia en un caso de uso real

export abstract class Vehicle {
    protected brand: string;
    protected year: number;
    protected isRunning: boolean = false;

    constructor(brand: string, year: number) {
        this.brand = brand;
        this.year = year;
    }

    // Método que debe ser implementado por las clases hijas
    abstract start(): void;

    stop(): void {
        if (this.isRunning) {
            console.log(`${this.brand} has stopped.`);
            this.isRunning = false;
        } else {
            console.log(`${this.brand} is already stopped.`);
        }
    }

    getInfo(): string {
        return `${this.brand} (${this.year}) - ${this.isRunning ? 'Running' : 'Stopped'}`;
    }

    protected startEngine(): void {
        console.log(`Starting ${this.brand} engine...`);
        this.isRunning = true;
    }
}

export class Car extends Vehicle {
    private doors: number;
    private fuelType: 'gasoline' | 'diesel' | 'electric';

    constructor(brand: string, year: number, doors: number, fuelType: 'gasoline' | 'diesel' | 'electric') {
        super(brand, year);
        this.doors = doors;
        this.fuelType = fuelType;
    }

    start(): void {
        console.log(`Checking ${this.doors}-door car systems...`);
        console.log(`Fuel type: ${this.fuelType}`);
        this.startEngine();
        console.log('Car is ready to drive!');
    }

    honk(): void {
        console.log(`${this.brand}: Beep! Beep!`);
    }

    getCarInfo(): string {
        return `${this.getInfo()} - ${this.doors} doors, ${this.fuelType}`;
    }
}

export class Motorcycle extends Vehicle {
    private engineSize: number; // en cc

    constructor(brand: string, year: number, engineSize: number) {
        super(brand, year);
        this.engineSize = engineSize;
    }

    start(): void {
        console.log('Putting on helmet...');
        console.log(`Starting ${this.engineSize}cc motorcycle...`);
        this.startEngine();
        console.log('Ready to ride!');
    }

    wheelie(): void {
        if (this.isRunning) {
            console.log(`${this.brand} is doing a wheelie! 🏍️`);
        } else {
            console.log('Start the motorcycle first!');
        }
    }

    getMotorcycleInfo(): string {
        return `${this.getInfo()} - ${this.engineSize}cc`;
    }
}

// Ejemplo de uso
console.log('=== Sistema de Vehículos ===\n');

const car = new Car('Toyota', 2023, 4, 'gasoline');
const motorcycle = new Motorcycle('Yamaha', 2022, 600);

console.log('--- Información inicial ---');
console.log(car.getCarInfo());
console.log(motorcycle.getMotorcycleInfo());

console.log('\n--- Arrancando vehículos ---');
car.start();
console.log();
motorcycle.start();

console.log('\n--- Acciones específicas ---');
car.honk();
motorcycle.wheelie();

console.log('\n--- Información después de arrancar ---');
console.log(car.getCarInfo());
console.log(motorcycle.getMotorcycleInfo());

console.log('\n--- Deteniendo vehículos ---');
car.stop();
motorcycle.stop();
