function ex1() {
    let x = "150";
    let y = 150;
    let z = true;

    let result = "";
    result += "Type de x : " + typeof x + "\n";
    result += "Type de y : " + typeof y + "\n";
    result += "Type de z : " + typeof z + "\n";

    x = Number(x);
    result += "Nouveau type de x : " + typeof x + "\n";
    result += "JavaScript peut changer dynamiquement le type d'une variable car c'est un langage à typage dynamique.";

    document.getElementById("output").textContent = result;
}
