function ex3() {
    let n = Number(prompt("Entrez un nombre :"));
    let result = "";

    if (n < 0) result = "Nombre négatif";
    else if (n <= 10) result = "Petit";
    else if (n <= 50) result = "Moyen";
    else if (n <= 100) result = "Grand";
    else result = "Très grand";

    document.getElementById("output").textContent = result;
}
