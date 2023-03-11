const submitButton = document.querySelector('button')
const form = document.querySelector('form')
const msgError = document.querySelector('span')
const errorIcon = document.querySelector('.error')
const checkedIcon = document.querySelector('.checked')
const email = form.email

function escreverAviso(aviso){
    msgError.innerHTML = aviso
}

function aparecerIcone(icone,display){
    icone.style.display = display
}

function validarEmail(email){
    let validador = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return validador.test(email)
}


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    msgError.innerHTMl = ''
    aparecerIcone(errorIcon, 'none')
    let valorEmail = email.value


    if(validarEmail(email.value)){
        escreverAviso('one more step to go! check your e-mail')
        aparecerIcone(errorIcon, 'none')
        msgError.style.color = '#15EB79'
    }else{
        escreverAviso('Please provide a valid email')
        aparecerIcone(errorIcon, 'block')
        msgError.style.color = "hsl(0, 93%, 68%)"

    }
   


})