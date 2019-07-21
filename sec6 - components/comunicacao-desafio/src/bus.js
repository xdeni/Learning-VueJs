import Vue from 'vue'
export default new Vue({
    methods: {
        selectUser(user) {
            this.$emit('selectUser', user)
        },
        selectedUser (cb) {
            this.$on('selectUser', cb)
        }
    }
})