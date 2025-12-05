function ex7() {
    function verifierMotDePasse(mdp) {
        return mdp.length >= 8 && mdp.includes("@");
    }

    let mdp = prompt("Entrez un mot de passe :");
    let result = verifierMotDePasse(mdp) ? "Mot de passe valide" : "Mot de passe non valide";

    document.getElementById("output").textContent = result;
}
