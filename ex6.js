function ex6() {
    let pair = 0;
    let impair = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) pair += i;
        else impair += i;
    }

    document.getElementById("output").textContent =
        "Somme des pairs = " + pair + "\nSomme des impairs = " + impair;
}
