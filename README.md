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


**Conceptos clave:**
- **Clase padre (Animal)**: Define propiedades y métodos básicos
- **Clase hija (Dog)**: Extiende la funcionalidad de Animal usando `extends`
- **Constructor hijo**: Usa `super()` para llamar al constructor del padre
- **Herencia de métodos**: Dog hereda automáticamente `move()` y `greeting()`
- **Métodos propios**: Dog puede tener sus propios métodos como `woof()`

### 📝 Archivo 09: Modificador Protected y Herencia Avanzada (`09-protected.ts`)

Este archivo profundiza en conceptos avanzados de herencia:

**Conceptos clave:**
- **Modificador `protected`**: Permite acceso desde la clase y sus clases hijas
- **Sobrescritura de métodos**: Dog redefine el método `move()` con comportamiento específico
- **Llamada a métodos del padre**: Usa `super.move()` para acceder al método original
- **Encapsulación**: `doSomething()` es accessible solo dentro de la jerarquía de clases

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

⭐ **¡No olvides dar una estrella al repositorio si te ha sido útil!**
