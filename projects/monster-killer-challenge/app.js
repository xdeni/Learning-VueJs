new Vue({
    el: '#app',
    data: {
        monster: {
            name: 'Monstro do lago ness',
            level: 35,
            life: 100
        },
        player: {
            name: 'Adenilson',
            level: 34,
            life: 100
        },
        escape: false,
        fight_log: [],
        champion : '' 
    },
    methods: {
        attack () {
            this.update_life({
                player_damage: this.random_damage(),
                monster_damage: this.random_damage()
            })
        },
        super_attack () {
            this.update_life({
                player_damage: this.random_damage() + (this.random_damage() /2),
                monster_damage: this.random_damage()
            })
        },
        update_life (attacks) {
            if(attacks.player_damage == 'heal')
                this.player.life = (this.player.life + (this.random_damage() + 5))
            else 
                this.monster.life = (this.monster.life - attacks.player_damage)

            this.player.life = (this.player.life - (attacks.monster_damage + 2))
            
            this.generate_log(attacks)
        },
        heal () {
            this.update_life({
                player_damage: 'heal',
                monster_damage: this.random_damage() + 2
            })
        },
        restart () {
            this.player.life = 100
            this.monster.life = 100
            this.escape = false
            this.fight_log.length = 0
            this.champion = ''
        },
        generate_log (attacks) {
            for(key in attacks) {
                this.fight_log.unshift({
                    id: Math.random(),
                    damage: attacks[key],
                    type: key,
                    color: key == 'monster_damage' ? 'red' : 'green'
                })
            }
            this.verify_champion(attacks)
        },
        verify_champion (attacks) {
            if(this.monster.life < attacks.player_damage) {
                this.champion = 'O campeão da partida foi ' + this.player.name
                this.monster.life = 0
            }else if(this.player.life < attacks.monster_damage){
                this.champion = 'O campeão da partida foi o monstro'
                this.player.life = 0
            }
        },
        random_damage() {
            return Math.round(Math.random() * (10 - 1) + 1)
        }
    },
    computed: {

    },
    watch: {

    }
})