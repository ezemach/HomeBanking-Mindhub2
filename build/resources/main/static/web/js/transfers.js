const { createApp } = Vue;
createApp({
    data() {
        return {
            data:"",
            externAccount:"",
            ownAccount:"",
            amount:"",
            description:""
        }
    },
    methods: {
        newTransfer() {
            axios.post('/api/transactions',`type=${this.type}&color=${this.color}`)
                .then(response => {
                    Swal.fire(
                        response.data,
                        'You have created a new card!',
                        'success'
                      )
                    console.log("created card")
                    this.data = response.data
                    this.cuentas = this.data.accounts
                    console.log(this.data)
                    
                })
                .catch(err =>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: err.response.data,
                      })
                console.error(err);
                this.error = "failed to create card. Please try again!"    
            });     
        },
    }

})
.mount('#app')

var ownAccountFields = document.getElementById("own_account_fields");
var thirdPartyFields = document.getElementById("third_party_fields");

document.getElementById("own_account").addEventListener("click", function() {
  ownAccountFields.style.display = "block";
  thirdPartyFields.style.display = "none";
});

document.getElementById("third_party").addEventListener("click", function() {
  ownAccountFields.style.display = "none";
  thirdPartyFields.style.display = "block";
});

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  var transferType = document.querySelector('input[name="transfer_type"]:checked').value;
  if (transferType === "own_account") {
    var destinationAccount = document.getElementById("destination_account").value;
    if (destinationAccount === "") {
      alert("Selecciona una cuenta de destino");
      return false;
    }
  } else if (transferType === "third_party") {
    var accountNumber = document.getElementById("account_number").value;
    if (accountNumber === "") {
      alert("Ingresa el número de cuenta");
      return false;
    }
  } else {
    alert("Selecciona un tipo de transferencia");
    return false;
  }
  alert("Transferencia enviada");
  return true;
});