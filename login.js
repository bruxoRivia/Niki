function loginFunction() {
    const loginValue = JSON.parse(localStorage.getItem("userData"))
    const buttom = document.getElementById("buttom2")
    const login = document.getElementById("login")
    const promocoes = document.getElementById("promocoes")
    const inputs = document.querySelectorAll(".inputs")
    buttom.addEventListener("click", (event)=>{
        event.preventDefault()
        if(loginValue.username == inputs[0].value && loginValue.password == inputs[1].value){
            login.style.display="none"
            promocoes.style.display="block"
        }else{
            alert("Email ou senha incorretos!")
            console.log(loginValue.username)
            console.log(inputs[0].value)
        }
    })
console.log(loginValue)
console.log("teste")}

loginFunction()