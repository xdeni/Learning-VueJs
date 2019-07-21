<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome de usuário: {{nome}}</p>
        <p>{{age}}</p>
        <button @click='resetName'>Reiniciar nome</button>
        <button @click='resetNameCb'>Reiniciar nome (CB)</button>
    </div>
</template>

<script>
import Bus from '@/bus'

export default {
    props: {
        nome: {
            type: String,
            required: true,
            default: "Anônimo"
        },
        age: Number,
        resetNameCb: Function
    },
    methods: {
        resetName () {
            this.nome = 'Adenilson'
            this.$emit('resetName', this.nome)
        }
    },
    created () {
        Bus.onAgeChange(age => this.age = age)
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
