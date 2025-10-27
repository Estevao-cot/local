function passar(){
    let i1 = document.getElementById("nome").value
    let i2 = document.getElementById("endereco").value
    let i3 = document.getElementById("telefone").value
    let i4 = document.getElementById("cpf").value
    let i5 = document.getElementById("idade").value
    let i6 = document.getElementById("rg").value
    let i7 = [i1, i2, i3, i4, i5, i6]
    localStorage.setItem("Formulario", i7);
    let s1 = localStorage.getItem("Formulario")
    console.log(i7, s1)
    }
    
    
    function Olhar(){
        let s1 = localStorage.getItem("Formulario")
        console.log(s1)
    }