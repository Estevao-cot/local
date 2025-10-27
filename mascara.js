var telefone = document.getElementById("telefone");
telefone.addEventListener("input", () => { var limpar = telefone.value.replace(/\D/g, "").substring(0,11) ;

var numerosarray = limpar.split("");

var formatado = "";

if(numerosarray.length > 0){
formatado += (${numerosarray.slice(0,2).join("")}) ;
}

if(numerosarray.length > 2){
formatado +=  ${numerosarray.slice(2,7).join("")} ;
}

if(numerosarray.length > 7){
formatado += -${numerosarray.slice(7,11).join("")} ;
}

telefone.value = formatado;
});



var cpf = document.getElementById("cpf");
cpf.addEventListener("input", () => { var limpar = cpf.value.replace(/\D/g, "").substring(0,11) ;

var numerosarray = limpar.split("");

var formatado = "";

if(numerosarray.length > 0){
formatado += ${numerosarray.slice(0,3).join("")} ;
}

if(numerosarray.length > 3){
formatado += .${numerosarray.slice(3,6).join("")} ;
}

if(numerosarray.length > 6){
formatado += .${numerosarray.slice(6,9).join("")} ;
}

if(numerosarray.length > 9){
formatado += -${numerosarray.slice(9,11).join("")} ;
}

cpf.value = formatado;
});




var rg = document.getElementById("rg");
rg.addEventListener("input", () => { var limpar = rg.value.replace(/\D/g, "").substring(0,9) ;

var numerosarray = limpar.split("");

var formatado = "";

if(numerosarray.length > 0){
formatado += ${numerosarray.slice(0,2).join("")} ;
}

if(numerosarray.length > 2){
formatado += .${numerosarray.slice(2,5).join("")} ;
}

if(numerosarray.length > 5){
formatado += .${numerosarray.slice(5,8).join("")} ;
}

if(numerosarray.length > 8){
formatado += -${numerosarray.slice(8,9).join("")} ;
}

rg.value = formatado;
});