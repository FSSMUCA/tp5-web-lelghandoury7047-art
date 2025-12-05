function ex9() {
    function factorielle(n) {
        if (n === 0) return 1;
        return n * factorielle(n - 1);
    }

    let n = Number(prompt("Entrez un nombre :"));
    let result = "Factorielle(" + n + ") = " + factorielle(n);

    document.getElementById("output").textContent = result;
}
