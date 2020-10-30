<template>
    <div>
        <h1 :style="{'color': color}">
            Contador: {{signoPeso}}
        </h1>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
    props: ['contador', 'color'],
    setup(props) {
        const signoPeso = computed(() => {
            return '$' + props.contador
        });

        return {signoPeso}
    }
}
</script>