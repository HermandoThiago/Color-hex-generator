// Color generator HEX

    let button = document.getElementById("generate").addEventListener("click", randomColor)
    let copiar = document.getElementById("copy").addEventListener("click", () => {

        document.getElementById("span").innerHTML = "copied!"

    })  

    function resetMessage(){
        document.getElementById("span").innerHTML = ""
    }

    function randomColor(){

        resetMessage()

        let letters = "0123456789ABCDEF"
        let hex = "#"

        for(var i = 0; i < 6; i++){
            hex += letters[Math.floor(Math.random()*16)]
        }

        let text = document.querySelector("h3")
        let div = document.querySelector(".color")
        
        div.style.backgroundColor = hex
        text.innerHTML = hex
    }