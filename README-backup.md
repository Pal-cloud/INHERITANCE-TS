# Programación Orientada a Objetos: Herencia con TypeScript

Este repositorio contiene ejemplos prácticos de Programación Orientada a Objetos (OOP) en TypeScript, enfocándose específicamente en **herencia** y conceptos relacionados.

## 🚀 Configuración del Entorno de Desarrollo

### Prerrequisitos
- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm (incluido con Node.js)

### Pasos para Configurar el Proyecto

1. **Crear el directorio del proyecto**
   ```bash
   mkdir inheritance-ts
   cd inheritance-ts
   ```

2. **Inicializar el proyecto Node.js**
   ```bash
   npm init -y
   ```

3. **Instalar TypeScript y ts-node como dependencias de desarrollo**
   ```bash
   npm install -D typescript ts-node @types/node
   ```

4. **Crear la configuración de TypeScript**
   ```bash
   npx tsc --init
   ```
   
   O crear manualmente el archivo `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "rootDir": "./src",
       "outDir": "./dist",
       "module": "commonjs",
       "target": "es2020",
       "moduleResolution": "node",
       "types": ["node"],
       "sourceMap": true,
       "declaration": true,
       "declarationMap": true,
       "strict": true,
       "isolatedModules": true,
       "skipLibCheck": true
     }
   }
   ```

5. **Crear la estructura de carpetas**
   ```bash
   mkdir src
   ```

6. **Ejecutar archivos TypeScript**
   ```bash
   npx ts-node src/archivo.ts
   ```

## 📁 Estructura del Proyecto

```
inheritance-ts/
├── src/
│   ├── 01-class.ts         # Introducción a clases
│   ├── 02-methods.ts       # Métodos en clases
│   ├── 03-public.ts        # Modificador de acceso public
│   ├── 04-private.ts       # Modificador de acceso private
│   ├── 05-constructor.ts   # Constructores
│   ├── 06-getters.ts       # Métodos getter
│   ├── 07-setters.ts       # Métodos setter
│   ├── 08-inheritance.ts   # 🔍 Herencia básica
│   └── 09-protected.ts     # 🔍 Modificador protected y herencia avanzada
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Enfoque Principal: Herencia (Archivos 08 y 09)

### 📝 Archivo 08: Herencia Básica (`08-inheritance.ts`)

Este archivo introduce los conceptos fundamentales de herencia en TypeScript:

```typescript
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
```

**Conceptos clave:**
- **Clase padre (Animal)**: Define propiedades y métodos básicos
- **Clase hija (Dog)**: Extiende la funcionalidad de Animal usando `extends`
- **Constructor hijo**: Usa `super()` para llamar al constructor del padre
- **Herencia de métodos**: Dog hereda automáticamente `move()` y `greeting()`
- **Métodos propios**: Dog puede tener sus propios métodos como `woof()`

### 📝 Archivo 09: Modificador Protected y Herencia Avanzada (`09-protected.ts`)

Este archivo profundiza en conceptos avanzados de herencia:

```typescript
export class Animal {
    constructor(protected name: string) { } // protected permite acceso en clases hijas

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
            console.log(`Woof! ${this.name}`); // Acceso a propiedad protected
        }

        this.doSomething(); // Acceso a método protected
    }

    move() {
        console.log('Moving as a dog');
        super.move(); // Llamada al método del padre
    }
}
```

**Conceptos clave:**
- **Modificador `protected`**: Permite acceso desde la clase y sus clases hijas
- **Sobrescritura de métodos**: Dog redefine el método `move()` con comportamiento específico
- **Llamada a métodos del padre**: Usa `super.move()` para acceder al método original
- **Encapsulación**: `doSomething()` es accessible solo dentro de la jerarquía de clases

## 🔄 Comparación entre Archivos 08 y 09

| Aspecto | Archivo 08 (Básico) | Archivo 09 (Avanzado) |
|---------|---------------------|------------------------|
| **Modificadores de acceso** | `public` | `protected` |
| **Sobrescritura de métodos** | No | Sí (`move()`) |
| **Métodos protegidos** | No | Sí (`doSomething()`) |
| **Acceso a propiedades del padre** | Directo | A través de `protected` |
| **Uso de `super`** | Solo en constructor | Constructor y métodos |

## 🚀 Cómo Ejecutar los Ejemplos

1. **Ejecutar herencia básica:**
   ```bash
   npx ts-node src/08-inheritance.ts
   ```

2. **Ejecutar herencia avanzada:**
   ```bash
   npx ts-node src/09-protected.ts
   ```

3. **Compilar todo el proyecto:**
   ```bash
   npx tsc
   ```

## 📚 Conceptos de OOP Cubiertos

### 1. **Herencia**
- Permite que una clase hija herede propiedades y métodos de una clase padre
- Usa la palabra clave `extends`

### 2. **Modificadores de Acceso**
- **`public`**: Accesible desde cualquier lugar
- **`private`**: Solo accesible dentro de la misma clase
- **`protected`**: Accesible dentro de la clase y sus clases hijas

### 3. **Sobrescritura de Métodos (Method Overriding)**
- Las clases hijas pueden redefinir métodos del padre
- Uso de `super` para acceder a la implementación del padre

### 4. **Constructor con Herencia**
- Los constructores de clases hijas deben llamar a `super()`
- Permite inicializar tanto propiedades del padre como del hijo

## 🎯 Casos de Uso Prácticos

### Ejemplo 1: Sistema de Vehículos
```typescript
class Vehicle {
    protected brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    
    start() {
        console.log(`${this.brand} is starting...`);
    }
}

class Car extends Vehicle {
    private doors: number;
    
    constructor(brand: string, doors: number) {
        super(brand);
        this.doors = doors;
    }
    
    start() {
        console.log('Checking engine...');
        super.start();
    }
}
```

### Ejemplo 2: Sistema de Empleados
```typescript
class Employee {
    protected name: string;
    protected salary: number;
    
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
    
    work() {
        console.log(`${this.name} is working`);
    }
}

class Manager extends Employee {
    private team: Employee[];
    
    constructor(name: string, salary: number) {
        super(name, salary);
        this.team = [];
    }
    
    work() {
        console.log(`${this.name} is managing the team`);
        super.work();
    }
    
    addTeamMember(employee: Employee) {
        this.team.push(employee);
    }
}
```

## 🛠 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar un archivo específico
npx ts-node src/nombreArchivo.ts

# Compilar TypeScript a JavaScript
npx tsc

# Compilar en modo watch
npx tsc --watch

# Verificar tipos sin compilar
npx tsc --noEmit

# Limpiar directorio de salida
rm -rf dist
```

## 📖 Recursos Adicionales

- [Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/)
- [Herencia en TypeScript](https://www.typescriptlang.org/docs/handbook/2/classes.html#inheritance)
- [Modificadores de acceso](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ **¡No olvides dar una estrella al repositorio si te ha sido útil!**
