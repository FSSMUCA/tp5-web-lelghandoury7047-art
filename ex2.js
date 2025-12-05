function ex2() {
    let prenom = "Sara";
    let age = 22;

    let result = "Je m'appelle " + prenom + " et j'ai " + age + " ans.\n";

    age = 23; // modification
    result += "Après modification : Je m'appelle " + prenom + " et j'ai " + age + " ans.";

    document.getElementById("output").textContent = result;
}
