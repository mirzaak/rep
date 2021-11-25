const app = Vue.createApp({
data(){
    return{
        pokaziKnjige: true,
        title:'Naslov',
        subtitle:'Podnaslov',
        broj: 100
    }
},
    methods:{
        promijeni(){
            this.pokaziKnjige = !this.pokaziKnjige
        },
        toggle(e, d){
            console.log(e, e.type,d)
        
        
    }
    }

})

app.mount('#app')