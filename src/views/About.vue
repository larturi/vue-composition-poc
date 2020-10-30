<template>
  <div class="about">
    <Titulo :contador="contador" :color="color"/>
    <!-- <button @click="restar">-</button>
    <button @click="sumar">+</button> -->
    <Boton :textoBoton="'Sumar'" @accion="sumar"/>
    <Boton :textoBoton="'Restar'" @accion="restar"/>
    <hr>
    <input type="text" v-model="texto">
    <p>{{texto}}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Titulo from '../components/Titulo';
import Boton from '../components/Boton';

export default {
  components: {
    Titulo,
    Boton
  },
  setup() {
    const contador = ref(0);
    const texto = ref('');

    const sumar = () => {
      contador.value++;
    }

    const restar = () => {
      contador.value--;
    }

    const color = computed(() => {
      return contador.value < 0 ? 'red' : 'blue'
    });

    return {contador, sumar, restar, color, texto};
  }
}
</script>
