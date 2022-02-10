'use strict'

const botonNumeros = document.getElementsByName('data_number');
const botonOperacion = document.getElementsByName('data_operacion');
const botonIgual = document.getElementsByName('data_igual')[0];
const botonEliminar = document.getElementsByName('data_delete')[0];

var resultado = document.getElementById('resultado');
var operacionActual = '';
var operacionAnterior = '';
var operacion = undefined;


/*----------------------Eventos de botones--------------------*/
botonNumeros.forEach(boton => {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    });
});

botonOperacion.forEach(boton => {
    boton.addEventListener('click', function () {
        selectOperacion(boton.innerText);
    });
});

botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
});

botonEliminar.addEventListener('click', function () {
    clear();
    actualizarDisplay();
});

/* --------------------Metodos--------------------------*/
function agregarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

function actualizarDisplay() {
    resultado.value = operacionActual;
}

function clear() {
    operacionActual = '';
    operacionAnterior = '';
    operacion = undefined;
}

function selectOperacion(op) {
    if (operacionActual == '') return;
    if (operacionAnterior !== '') {
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}

clear();