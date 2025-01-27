﻿# Catsbreeds
 
## Development server
Ejecute `ionic serve` para un servidor de desarrollo. Navegue hasta `http://localhost:8100/`. La aplicación se recargará automáticamente si modifica alguno de los archivos de origen.

## Versiones:
Ionic version: 7.2.0.
Angular CLI version: 19.1.4.
Jasmine version: 5.1.0.
Karma version: 6.4.0.
Gradle version: 8.11.1

## Consideraciones:
El proyecto tiene la cobertura al 100% utilizando Jasmine y Karma en la generación de pruebas unitarias. 
Para la creación del Spash Screen, se utilo la Api de Splash Screen Capacitor @capacitor/splash-screen.
Al momento de generar el build del proyecto android aparecieron conflictos de dependencias entre las bibliotecas kotlin-stdlib y kotlin-stdlib-jdk7/kotlin-stdlib-jdk8, para solucionar este error se agregaron las siguientes lineas en el archivo cordova.variables.gradlle
  configurations.all {
    resolutionStrategy {
      force 'org.jetbrains.kotlin:kotlin-stdlib:1.8.22'  // Forzar la versión de kotlin-stdlib
      force 'org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.8.22'  // Forzar la versión de kotlin-stdlib-jdk7
      force 'org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.22'  // Forzar la versión de kotlin-stdlib-jdk8
    }
  }

  
