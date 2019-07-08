new Vue({
    el: '#challenge',
    data: {
        value:''
    },
    methods: {
        displayAlert (e) {
            alert(e.clientX + " " + e.clientY)
        },
        changeValue(e) {
            this.value = e.target.value
        }
    }
})