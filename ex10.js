function ex10() {
    function sommeIterative(n) {
        let s = 0;
        for (let i = 1; i <= n; i++) s += i;
        return s;
    }

    function sommeRecursive(n) {
        if (n === 1) return 1;
        return n + sommeRecursive(n - 1);
    }

    let n = Number(prompt("Entrez n :"));
    let result = "Somme itérative = " + sommeIterative(n) + "\n" +
                 "Somme récursive = " + sommeRecursive(n);

    document.getElementById("output").textContent = result;
}
