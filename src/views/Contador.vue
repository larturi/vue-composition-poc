<template>
  <div>
      <h1>Contador: {{contador}}</h1>
      <Boton :textoBoton="'Sumar'" @accion="sumar"/>
      <Boton :textoBoton="'Restar'" @accion="restar"/>
  </div>
</template>

<script>
import {useContador} from '../hooks/useContador';
import Boton from '../components/Boton';

export default {
    components: {
        Boton
    },
    setup() {
        return { ...useContador() }
    }
}
</script>

