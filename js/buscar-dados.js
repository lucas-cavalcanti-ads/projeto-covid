var  btnApi = document.querySelector("#chamar-api")

    //OBJETO PARA CONSUMIR API
    var xhr = new XMLHttpRequest()

    //ABRINDO CONECXAO
    xhr.open("GET", "https://api.covid19api.com/summary")

    //RECEBENDO DADOS
    xhr.addEventListener("load",function(){

        if(xhr.status == 200){ //API Retornou

            var resposta = xhr.responseText
            var global = JSON.parse(resposta)
            var listaPaises = global.Countries; 
            var geral = global.Global
            var geralNovoConfirmado = geral.NewConfirmed
            var geralTotalConfirmado = geral.TotalConfirmed
            var geralNovoObitos = geral.NewDeaths
            var geralTotalObitos = geral.TotalDeaths
            var geralNovoRecuperados = geral.NewRecovered
            var geralTotalRecuperados = geral.TotalRecovered

            const conteudoCard = (nome, codigo, novoConfirmado, totalConfirmados, novoObitos, totalObitos, novoRecuperados, totalRecuperados,dataAtualizacao) => {
                
                return card
            }
            
            var qtdPaises = Object.keys(listaPaises)
            console.log(qtdPaises.length)
            // console.log(listaPaises[185])
            
            //console.log(global.Countries)
            //console.log(listaPaises.lenght)
            for(var i = 0; i < qtdPaises.length; i++){
                //console.log(listaPaises[i].Country)   
        
                var paisNome = listaPaises[i].Country
                var paisCodigo = listaPaises[i].CountryCode
                var paisNovoConfirmado = listaPaises[i].NewConfirmed
                var paisTotalConfirmados = listaPaises[i].TotalConfirmed
                var paisNovoObitos = listaPaises[i].NewDeaths
                var paisTotalObitos = listaPaises[i].TotalDeaths
                var paisNovoRecuperados = listaPaises[i].NewRecovered
                var paisTotalRecuperados = listaPaises[i].TotalRecovered
                var paisDataAtualizacao = listaPaises[i].Date
                
                var card = document.createElement("div")
                var containerCard = document.querySelector("[data-container-card]")
                card.classList.add("card")
                card.classList.add("tamanho-card")
            
                const conteudoCard = `
                <div>
                    <img src="img/img-covid.png" class="card-img-top" alt="imagem sobre covid">
                    <div class="card-body" data-corpo-card>
                        <h5 class="card-title titulo-card">${paisNome} - ${paisCodigo}</h5>
                        <p class="card-text text-left" data-texto-card>
                        <label>Novos casos confirmados: <strong>${paisNovoConfirmado}</strong></label> <br>
                        <label>Total de novos casos confirmados: <strong>${paisTotalConfirmados}</strong></label> <br>
                        <label>Novos óbitos: <strong>${paisNovoObitos}</strong></label> <br>
                        <label>Total de óbitos: <strong>${paisTotalObitos}</strong></label> <br>
                        <label>Novos recuperados: <strong>${paisNovoRecuperados}</strong></label> <br>
                        <label>Total de recuperados: <strong>${paisTotalRecuperados}</strong></label> <br>
                        <label>Data de atualização: <strong>${paisDataAtualizacao}</strong></label>
                        </p>
                    </div>
                </div>
                `
                card.innerHTML = conteudoCard

                containerCard.appendChild(card)
            }
        
        }else{

            console.log(xhr.status)
            console.log(xhr.responseText)
        }
    })
    
    //ENVIANDO REQUISICAO GET
    xhr.send()

