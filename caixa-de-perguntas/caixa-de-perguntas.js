function enviar(){
    let pergunta = String(document.getElementById('ask').value)
    if (pergunta == '') {
        alert('Por favor faça uma pergunta.')
    }else{
        alert(`Você perguntou: "${pergunta}"`)
    } 
}
//falta aprender como fazer a opção de verificar se o texo inserido foi uma pergunta