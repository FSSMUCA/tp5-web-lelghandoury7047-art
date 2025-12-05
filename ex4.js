function ex4() {
    let min = Number(prompt("Entrez le nombre minimal :"));
    let max = Number(prompt("Entrez le nombre maximal :"));
    let result = "";

    for (let i = min; i <= max; i++) {
        if (i % 3 === 0 && i % 5 === 0) result += i + " : Five&Three\n";
        else if (i % 3 === 0) result += i + " : Three\n";
        else if (i % 5 === 0) result += i + " : Five\n";
        else result += i + "\n";
    }

    document.getElementById("output").textContent = result;
}
