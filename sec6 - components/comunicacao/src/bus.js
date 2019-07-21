import Vue from 'vue'
export default new Vue({
    methods: {
        changeAgeEvent (age) {
            this.$emit('changeAgeEvent', age)
        },
        onAgeChange (cb) {
            this.$on('changeAgeEvent', cb)
        }
    }
})