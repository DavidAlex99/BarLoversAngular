# BaresLovers

## Este proyecto (Angular) esta en relacion con el Back-end/API para las correspondientes peticiones
https://github.com/DavidAlex99/BarLoversAdminAPI.git

## Iniciar el servidor
Para iniciar el servidor y tomar los datos devueltos por el Back-end con respecto a los bares,se ingresa en al consola de comandos:
```
ng serve -o
```

Por defecto, Angular toma el puerto 4200.
Asegurarse de que al iniciar  el servidor, este puerto no se encuentre ocupado, puesto que este numero se encuentra registrado en el Back-end para que pueda hacer peticiones CORS.
Si toma otro puerto, no se conectara con el Back-end

## Notas (Estructura)
Debido a la presencia de muchos componentes, y para no causar confusion en saber cual es el rol de cada uno, se explica como es la estructura e interaccion de cada uno en el proyecto 
<img src="https://github.com/DavidAlex99/BarLoversAngular/blob/main/baresLovers/src/assets/EstructuraAngulardrawio.png?raw=true" alt="Estructura Angular">

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
