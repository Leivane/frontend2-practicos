// 1-Entrada de datos   2-- Procesamiento  3-- Salida

// 1-Ver los datos con los que trabajaremos VARIABLES
let eleccionUsuario
let eleccionMaquina
let resultado = "Sin jugar aún"

function eleccionDelUsuario(){
    eleccionUsuario = prompt("1-Piedra, 2-Papel, 3-Tijera")
}
function eleccionDeLaMaquina(){
eleccionMaquina = parseInt(Math.random()*3+1)
}
//2- Comparar quien gana
if(eleccionUsuario == 1){
    if(eleccionMaquina == 1){
        resultado = 'Empate!'
    }else 
    if(eleccionMaquina == 2){
        resultado = 'Perdiste'
    }else
    if(eleccionMaquina == 3){
        resultado = 'Ganaste!'
    }
}

if(eleccionUsuario == 2){
    if(eleccionMaquina == 1){
        resultado = 'ganaste'
    }else 
    if(eleccionMaquina == 2){
        resultado = 'Empate'
    }else
    if(eleccionMaquina == 3){
        resultado = 'Perdiste!'
    }
}
if(eleccionUsuario == 3){
    if(eleccionMaquina == 1){
        resultado = 'Perdiste'
    }else 
    if(eleccionMaquina == 2){
        resultado = 'Ganaste!'
    }else
    if(eleccionMaquina == 3){
        resultado = 'Empate!'
    }
}

//3- Mostrar Resultado
console.log('maquina'+eleccionMaquina)
console.log('Usuario'+ eleccionUsuario)
alert(resultado)
