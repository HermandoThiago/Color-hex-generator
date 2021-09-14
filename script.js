// Color generator HEX

    let button = document.getElementById("generate").addEventListener("click", randomColor)
    let copiar = document.getElementById("copy").addEventListener("click", () => {

        let text = document.querySelector("#hex")
        text.select()
        document.execCommand("copy")

        document.getElementById("span").innerHTML = "copied!"

    })  

    // reset span 
    function resetMessage(){
        document.getElementById("span").innerHTML = ""
    }

    function randomColor(){

        resetMessage()

        let letters = "0123456789ABCDEF"
        let hex = "#"


        // Geração de HEX
        for(var i = 0; i < 6; i++){
            hex += letters[Math.floor(Math.random()*16)]
        }

        let text = document.querySelector("#hex")
        let div = document.querySelector(".color")
        
        div.style.backgroundColor = hex
        text.value = hex
    }