const { createApp } = Vue;
createApp({
    data() {
        return {
            type:"",
            color:""
        };
    },
    methods: {
        createCard() {
            axios.post('/api/clients/current/cards',`type=${this.type}&color=${this.color}`)
                .then(response => {
                    console.log("created card")
                    
                })
                .catch(err =>{
                console.error(err);
                this.error = "failed to create card. Please try again!"    
            });    
        },
        logout() {
            axios.post('/api/logout')
            .then(response => {
                        window.location.replace('./index.html')
                })
                .catch(err => console.log(err));},
    }
    ,

}).mount('#app');