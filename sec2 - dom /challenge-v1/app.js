new Vue({
    el: '#challenge',
    data: {
        working: 'Yesss',
        name: 'Adenilson Santos',
        yearsOld: 21,
        image: 'https://avatars1.githubusercontent.com/u/43618734?s=460&v=4'
    },
    methods: {
        randomNumber(){
            return Math.round(Math.random() * 10)
        }
    }
})