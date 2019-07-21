<template>
    <div>
        <counter v-for="c in 5" :key="c" />
        <button>counter</button>
    </div>
</template>

<script>

import Counter from './counter'

export default {
    components: {
        counter: Counter
    }
}
</script>

<style scoped>
    button {color: pink;}
</style>
