<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>{{name}}</p>
        <p>{{age}}</p>
        <button @click="changeName">Change name</button>
        <hr>
        <div class="componentes">
            <app-usuario-info :age="age" :resetNameCb="resetNameCb" :nome="name" @resetName="name = $event"/>
            <app-usuario-editar :age="age" @changeAge="age = $event" />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    data () {
        return {
            name: 'Adenilson',
            age: 21
        }
    },
    methods: {
        changeName () {
            this.name = 'Santos!'
        },
        resetNameCb () {
            this.name = 'Adenilson'
        }
    },
    components: { AppUsuarioInfo, AppUsuarioEditar }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
