const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            data: [],
            cuentas: [],
            prestamos: [],
            tarjetas:[],
            tarjetaCredito:[],
            tarjetaDebito:[],
        };
    },
    created(){
        axios.post('http://localhost:8080/api/clients/current')
            .then(response => {
                this.data = response.data
                console.log(this.data)
                this.cuentas = this.data.accounts
                this.cuentas.sort((a, b) => b.id - a.id)
                this.prestamos = this.data.loans;
                this.prestamos.sort((a, b) => b.id - a.id)
                this.tarjetas = this.data.cards
                console.log(this.tarjetas);
                this.tipoDeTarjeta()
                console.log(this.tarjetaDebito);
                console.log(this.tarjetaCredito);

            })
            .catch(err => console.log(err))       
    },
    methods: {
        tipoDeTarjeta() {
            for(tipo of this.tarjetas ){
                if (tipo.type === "DEBIT"){
                    this.tarjetaDebito = tipo
                }else{
                    this.tarjetaCredito = tipo
                }
            }
            
        },
        logout() {
            axios.post('/api/logout')
            .then(response => {
                        window.location.replace('./index.html')
                })
                .catch(err => console.log(err));},
    }
    ,

});

app.mount('#app');