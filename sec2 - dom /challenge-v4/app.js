new Vue({
    el: '#challenge',
    data: {
        actualClass: true,
        classByUser: '',
        colorByUser: '#fff',
        shrink: true,
        spotlight: true,
        danger: true,
        width: '0%'
    },
    methods: {
        startEvent () {
            setInterval(() => {
                this.actualClass = !this.actualClass
            }, 2000)
        },
        startProgress () {
            let counter = 0

            let temp = setInterval(() => {
                counter += 10
                this.width = counter + '%'
                if(counter == 100) clearInterval(temp)
            }, 500)
        },
        setDanger (event) {
            this.danger = eval(event.target.value) 
        }
    }
})