new Vue({
    el: '#challenge',
    data: {
        value: 0
    },
    computed: {
        result () {
            return this.value == 37 ? 'equal value' : 'differente value'
        }
    },
    watch: {
        result (after, before) {
            setTimeout(() => {
                this.value = 0
            }, 5000)
        }
    }
})