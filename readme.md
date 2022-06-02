# CURSO FERNANDO HERRERA REACT-NATIVE SECCION 3-5

## Seccion 3

aca aprendemos a instalar todas las herramientas, mirar los videos.

Instrucciones oficinales (hace caso a ellas):

https://reactnative.dev/docs/environment-setup

Nostros usaremos React native con Typescript, asi que usar el comando de instalar con typescript.

```bash
npx react-native init AwesomeTSProject --template react-native-template-typescript
```

Correr emulador android:

```bash
npm run android
npx react-native run-android
```

(si tenes pantalla negra, fijate que el emulador este prendido...)

Correr el servidor de metro (para conectarse desde dispositivo fisico, o si el emulador ya esta abierto):

```bash
npm run start
```

```
Aporte aplicación nunca inicia (no muestra error)
0 votos
Braian · Clase 34 · hace 1 mes
Estuve lidiando con un problema donde el emulador iniciaba, y la consola se quedaba en la instrucción:

 info Starting the app on "emulator-5554"...
Starting: Intent { cmp=com.awesometsproject/.MainActivity }
sin error aparente, mas que el emulador quedaba en negro sin ningún tipo de error, revise por todos lados y lo único que encontré es que trate con una instalación desde 0 de nodejs.

Desístale mi Nodejs, reinicie, instale la ultima versión lts (nodejs 16), reinicie, y al crear el proyecto nuevamente, y ejecutar, arranco perfecto.
```

# Seccion 4 Layouts

Existen dos sistemas de posicionamiento de componentes: Relativo y absoluto.
el relativo hace que el punto izquierdo superior esa el eje principal, en este tanto top, botto, left y right son 0 por defecto y se mueven acorde.

En la posicion abosoluta el punto de referencia es el padre del componente.
por lo que poner top = 0, pone al componente arriba, right = 0, lo pone a la derecha, left= 0 a la izquierda, bottom = 0 abajo.

ademas los componentes no se colisionan entre si, por lo que se atraviesan.
