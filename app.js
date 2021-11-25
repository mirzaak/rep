const app = Vue.createApp({
data(){
    return{
        pokaziKnjige: true,
        knjige:[
            { naslov: "prvi naslov", pisac: "prvi pisac", img: "assets/bmw.png", naj: true },
            { naslov: "drugi naslov", pisac: "drugi pisac", img: "assets/benz.jpg", naj: false },
            { naslov: "treci naslov", pisac: "treci pisac", img: "assets/audi.jpg", naj : true }
        ]
    }
},
    methods:{
        promijeni(){
            this.pokaziKnjige = !this.pokaziKnjige
        },
        toggleFav(knjiga){
            knjiga.naj = !knjiga.naj
        }
    },
    computed:{
        filtriraneKnjige(){
            return this.knjige.filter((knjiga)=>knjiga.naj)
        }
    }

})

app.mount('#app')