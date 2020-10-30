<template>
  <div class="home">
    <h1 :style="{'color': color}">
      Contador: {{ contador }}
      </h1>
    <button @click="restar">-</button>
    <button @click="sumar">+</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      contador: 0
    }
  },
  computed: {
    color() {
      return this.contador < 0 ? 'red' : 'blue'
    }
  },
  methods: {
    sumar() {
      this.contador++;
    },
    restar() {
      this.contador--;
    }
  },
}
</script>
