function ex8() {
    function totalAvecRemise(total, remise) {
        return total - (total * remise / 100);
    }

    let total = Number(prompt("Entrez le total HT :"));
    let remise = Number(prompt("Entrez la remise (%) :"));
    let result = "Total final = " + totalAvecRemise(total, remise);

    document.getElementById("output").textContent = result;
}
