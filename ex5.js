function ex5() {
    let n = Number(prompt("Entrez un nombre :"));
    let result = "";

    for (let i = 1; i <= 10; i++) {
        result += n + " x " + i + " = " + (n * i) + "\n";
    }

    document.getElementById("output").textContent = result;
}
