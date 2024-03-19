function g1(x) {
    return Number(x)+5;
}

function g2(x,y) {
    return Number(x) + Number(y);
}

function g0(){
    let nombre = prompt('Nombre :')
    return Number(nombre)+2
}

document.write('Fonction G1 = '+g1(5)+'<br>')
document.write('Fonction G2 = '+g1(5+8)+'<br>')
document.write('Fonction G0 = '+g0()+'<br>')

