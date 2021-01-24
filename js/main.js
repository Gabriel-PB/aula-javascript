function botao(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https:etctech.com.br");
    //window.location.href = "https:etctech.com.br";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.valeu);
}



//alert("trocar texto");
/*
var nome = "Gabriel Pereira";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
alert(nome + " tem " + idade + " anos ");
alert(idade + idade2); 
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
*/
/*
var lista = ["maça", "pêra", "laranja"];
lista.pop();
lista.push("uva");
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
*/
/*
var fruta = {nome:"maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/
/*
var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var idade = prompt("Qual a sua idade?")

if (idade >= 18){
    alert("maior de idade");
} else{
    alert("menor de idade");
};
*/
/*
var count = 0;
while (count < 5){
    console.log(count);
    count = count +1;
};
*/
/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/
/*
var d = new Date();
alert(d.getMonth()+1);
*/
/*
function soma(n1, n2){
return n1 + n2;
}
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/
//alert(soma (5,10));

