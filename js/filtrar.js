var campoFiltro = document.querySelector("#filtrar-tabela") 

campoFiltro.addEventListener("input",function(){
    var textoFiltro = campoFiltro.value
    var cards = document.querySelectorAll(".card")

    if(this.value.length > 0){
        console.log("ENTROU NA FUNÇAO")
        for(var i = 0;i < cards.length; i++){    
            var card = cards[i]
            console.log(card)
            var nomePais = card.querySelector(".titulo-card").textContent
            var expressaoRegular = new RegExp(this.value, "i")
            
            if(!expressaoRegular.test(nomePais)){
                card.classList.add("invisivel")
            }else{
                card.classList.remove("invisivel")
            }
        }
    }else{
        for(var i = 0;i < cards.length;i++){
            var card = cards[i]
            card.classList.remove("invisivel")
        }
    }

})