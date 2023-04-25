document.getElementById("verificar").addEventListener("click", function(event) {
    event.preventDefault();
    
    let result = '';
    const valueA = parseInt(document.getElementById("valueA").value);
    const valueB = parseInt(document.getElementById("valueB").value);
    

    if (valueA > valueB){
        result = 'A é maior que B.';
    } else if(valueB > valueA){
        result = 'A é menor que B.';
    } else {
        result = 'A é igual a B.';
    }

    document.getElementById("result").innerText = result;
});

document.getElementById("resetBtn").addEventListener("click", function(){
    document.getElementById("valueA").value = '';
    document.getElementById("valueB").value = '';
    document.getElementById("result").innerText = '';
});