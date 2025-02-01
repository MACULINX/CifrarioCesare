function checkChiave(val)
{
    if( val < 0 )
        document.getElementById("inputChiave").value = 0;
    else if( val > 25 )
        document.getElementById("inputChiave").value = 25;

}

function mostraModal()
{
    if (document.getElementById("inputText").value == '')
        mostraErrore("#resultModal");
    else
        mostraRis("#resultModal", elaboraDati());
}

function mostraRis(s, val)
{
    const modal = new bootstrap.Modal(s);

    document.getElementById("labelResult").innerText = "Risultato dell'operazione";
    document.getElementById("result").innerHTML = '<textarea disabled class="w-100 form-control">'+val+'</textarea>';

    modal.show();
}

function mostraErrore(s)
{
    const modal = new bootstrap.Modal(s);

    document.getElementById("labelResult").innerText = "Errore!";
    document.getElementById("result").innerHTML = "Si prega di inserire tutti i dati richiesti";

    modal.show();
}