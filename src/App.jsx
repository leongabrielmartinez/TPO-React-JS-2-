import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <body>
    <div class="form-container">
      <form>

      <div class="border-selection">
        <h1>Formulario de registro</h1>

        <label for="nombre">Nombre</label>
        <input type="text" placeholder="ingrese su nombre" required="true"/>

        <label for="apellido">Apellido</label>
        <input type="text" placeholder="ingrese su apellido" required="true"/>

        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Ingrese su correo electrónico" required="true"></input>

        <label for="telefono">Teléfono</label>
        <input type="text" placeholder="ingrese su teléfono" required="true"/>

        <label for="contraseña">Contraseña</label>
        <input type="password" placeholder="ingrese su contraseña" required="true"/>

        <label for="contraseña">Contraseña</label>
        <input type="password" placeholder="reingrese su contraseña" required="true"/>

        <input class="buttom-send"type="submit" value="Enviar"></input>

      </div>
      </form>

    </div>
    </body>
    </>

  )
}

export default App
