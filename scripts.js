// Affiche le menu lorsque la souris entre dans la zone du menu
document.querySelector(".menu").onmouseover = () => {
    // Affiche la liste de navigation
    document.querySelector(".nav-list").classList.add("navActif");
    // Affiche le menu en surbrillance
    document.querySelector(".menu").classList.add("menuActif");
    // Cache le burger (l'icône de menu)
    document.querySelector("#burger").classList.add("hidden");
};

// Masque le menu lorsque la souris quitte la zone du menu
document.querySelector(".menu").onmouseout = () => {
    // Masque la liste de navigation
    document.querySelector(".nav-list").classList.remove("navActif");
    // Masque la surbrillance du menu
    document.querySelector(".menu").classList.remove("menuActif");
    // Affiche le burger (l'icône de menu)
    document.querySelector("#burger").classList.remove("hidden");
};

// Ajoute un écouteur d'événement à chaque lien de navigation
const links = document.getElementsByClassName('nav-link');
for (let link of links) {
    link.addEventListener('click', (e) => {
        // Empêche le comportement par défaut du lien (aller à l'URL)
        e.preventDefault();
        // Appelle la fonction onClickNav avec l'identifiant du lien cliqué
        onClickNav(link.id);
    });
}

// Ajoute un écouteur d'événement à la flèche de navigation
const arrow = document.getElementById('fleche');
fleche.addEventListener('click', (e) => {
    // Empêche le comportement par défaut de la flèche (aller à l'URL)
    e.preventDefault();
    // Appelle la fonction onClickNav avec l'identifiant "aboutus"
    onClickNav('aboutus');
});

// Fonction qui gère le comportement de navigation lorsqu'un élément est cliqué
function onClickNav(element) {
    // Récupère l'élément de destination de la navigation
    const newElement = document.getElementById(`${element}-anchor`);
    // Calcul la position de l'élément de destination par rapport à la fenêtre
    const y = newElement.getBoundingClientRect().top + window.scrollY;
    // Déplace la fenêtre vers la position de l'élément de destination de manière animée
    window.scroll({
        top: y,
        behavior: 'smooth'
    });
}
