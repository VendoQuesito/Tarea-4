# Tarea 4 de arquitectura

Este es un proyecto de una API rest siguiendo los principios y buenas practicas vistas en clase

## Instalacion del proyecto

1- Clonar el repositorio

```
git clone https://github.com/VendoQuesito/Tarea-4.git
```

2- Navegar a la carpeta del proyecto

```
cd Tarea 4
```

3- Instalar las dependencias

```
npm install
```

4- Crear un archivo `.env` y ingresar las variables de entorno

```
cp .env.example .env
```

### Variables de .env

Para cuando se haya copiado el .env se encontrara esta variable

```
JWT_SECRET=
```

Esa variable se debe rellenar con la Semilla secreta que se entrego junto con el Token

## Ejecucion de la aplicacion

Para ejecutar la aplicacion utilizaremos

```
npm start
```

Puede accederse mediante `http://localhost:3000` ya que la aplicacion se ejecuta en el puerto 3000

## Seeder

Para poblar la base de datos usar el siguiente comando

```
npm run seed
```
