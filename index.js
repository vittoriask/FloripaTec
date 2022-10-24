// let name = "Vitória";
// let age = 20;
// let profission = "Dev Junior";
// let obj = "Aprimorar os conhecimentos em desenvolvimento e engressar no mercado de trabalho.";


// let idade = Number(prompt("Informe sua idade"))

// if (idade >= 18){
//     alert('Maior de idade!')
// }else if(idade < 18){
//     alert('Menor de idade!')
// }

function calculaMedia(){
    if(document.getElementById('nota1').value= '' || document.getElementById('nota2').value == ''
    || document.getElementById('nota3').value == '' || document.getElementById('nota4').value == ''){

        alert('Preencha todas as notas!')
    } else{
        let nota1 = Number(document.getElementById('nota1').value)
        let nota2 = Number(document.getElementById('nota2').value)
        let nota3 = Number(document.getElementById('nota3').value)
        let nota4 = Number(document.getElementById('nota4').value)

        let media = (nota1 + nota2 + nota3 + nota4) / 4

        if(media < 6){
            alert('Média: ' + media + ', aluno reprovado')
            document.getElementById('resultado').textContent = 'Média: ' + media + ', aluno reprovado.'
            limparCampos()
        }else if(media >= 6 && media < 7){
            alert('Média: ' + media + ', aluno em recuperação!')
            document.getElementById('resultado').textContent = 'Média: ' + media + ', aluno em recuperação!'
            limparCampos()
        }else{
            alert('Média: ' + media + ', aluno aprovado.')
            document.getElementById('resultado').textContent = 'Média: ' + media + ', aluno aprovado.'
            limparCampos()
        }
    }


    function limparCampos(){
        document.getElementById('nota1').value='';
        document.getElementById('nota2').value='';
        document.getElementById('nota3').value='';
        document.getElementById('nota4').value='';
    }






}

// Apresenta ERRO!!!! ARRUMAR!!!


