<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>{{age}}</p>
        <button @click="changeAgeEvent">Mudar idade</button>
    </div>
</template>

<script>
import Bus from '@/bus'

export default {
    props: {
        age: Number
    },
    methods: {
        changeAgeEvent () {
            this.age = 30
            Bus.changeAgeEvent(this.age)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
