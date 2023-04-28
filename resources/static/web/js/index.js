const { createApp } = Vue;
createApp({
    data() {
        return {
            email:"",
            password:"",
        }
    },
    methods: {
        login() {
            axios.post('/api/login',`email=${this.email}&password=${this.password}`, {
                    headers:{'content-type':'application/x-www-form-urlencoded'}
                })
                .then(response => {
                    if (this.email == "admin@admin.com") {
                        window.location.replace('./web/manager.html')
                    } else {
                        window.location.replace('./accounts.html')
                    }

                })
                .catch(err =>{
                // Swal.fire({
                //     icon:'error',
                //     title:'Login Error',
                //     text:'Incorrect Information',

                // })    
                console.error(err);
                this.error = "ERROR. e-mail or password is wrong. Please try again!";
                this.$forceUpdate();    
            });

        }

    }

})
        
    

.mount('#app')