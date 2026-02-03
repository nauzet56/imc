document.getElementById("formIMC").addEventListener("submit", function (e) {
    e.preventDefault();

    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);

    const imc = peso / (altura * altura);
    const resultado = document.getElementById("resultado");

    let estado = "";
    let clase = "";

    if (imc < 18.5) {
        estado = "Bajo peso";
        clase = "bajo";
    } else if (imc < 25) {
        estado = "Normal";
        clase = "normal";
    } else if (imc < 30) {
        estado = "Sobrepeso";
        clase = "sobrepeso";
    } else {
        estado = "Obesidad";
        clase = "obesidad";
    }

    document.getElementById("valorIMC").textContent = "IMC: " + imc.toFixed(2);
    document.getElementById("estadoIMC").textContent = estado;

    resultado.className = clase;
    resultado.classList.remove("oculto");
});