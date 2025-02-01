function elaboraDati() {
    var testo = document.getElementById("inputText").value.toUpperCase();
    var chiave = document.getElementById("inputChiave").value;
    var tipo;
    var decodifica = 0;
    var retVal = "";

    if (document.getElementById("inputCodifica").checked)
        tipo = document.getElementById("inputCodifica").value;
    else {
        tipo = document.getElementById("inputDecodifica").value;
        decodifica = 26;
    }

    for (let index = 0; index < testo.length; index++) {
        const element = testo.split('');
        let charVal;
        var char = element[index];
        if ("A" <= char && char <= "Z") {
            if(tipo === "C"){
                charVal = ((char.charCodeAt(0) - 65 + parseInt(chiave, 10) + decodifica) % 26) + 65;
            }else{
                charVal = ((char.charCodeAt(0) - 65 - parseInt(chiave, 10) + decodifica) % 26) + 65;
            }
            retVal += String.fromCharCode(charVal);
        } else
            retVal += char;
    }
    return retVal;
}


