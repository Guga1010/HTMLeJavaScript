function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar<b>"; 
}
function redirecionar(){
    window.open("https://github.com/Guga1010"); 
}
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}
function load(){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
