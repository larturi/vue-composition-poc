import { ref } from 'vue';

export function useContador() {

    const contador = ref(0);

    const sumar = () => {
        contador.value++;
    };
  
    const restar = () => {
        contador.value--;
    };

    return {contador, sumar, restar};

}