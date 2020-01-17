/*
Em relação a máscara para o campo Phone, 
pesquisei algumas formas de fazer
mas não eram além do meu conhecimento
então não me senti a vontade para faze-las.
*/

function validarSenha() {
    let senha1 = document.getElementById('senha1')
    let senha2 = document.getElementById('senha2')
    console.log(senha1.value, senha2.value)
    if (senha1.value === senha2.value) {
        console.log('Dados cadastrados')
    } else {
        try {
            throw new Error('Suas senhas não coincidem. Tente Novamente !');
        } catch (e) {
            alert(e.name + ': ' + e.message);
        }
    }
    
}

function formulario() {
    let name = document.getElementById('name')
    let phone = document.getElementById('phone')
    let email = document.getElementById('email')
    window.alert(`Name: ${name.value} Phone: ${phone.value} Email: ${email.value}`)
}
