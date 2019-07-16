<template>
    
    <div>
        <strong>{{counter}}</strong>
        <button @click="add">Add</button>
        <button @click="subtract">Subtract</button>
    </div>

</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        add () {
            this.counter += 1
        },
        subtract () {
            this.counter -= 1
        }
    }
}
</script>

<style>

</style>
