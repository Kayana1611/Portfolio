document.querySelector(".menu").onmouseover = () => {
    document.querySelector(".nav-list").classList.add("navActif");
    document.querySelector(".menu").classList.add("menuActif");
    document.querySelector("#burger").classList.add("hidden");
};

document.querySelector(".menu").onmouseout = () => {
    document.querySelector(".nav-list").classList.remove("navActif");
    document.querySelector(".menu").classList.remove("menuActif");
    document.querySelector("#burger").classList.remove("hidden");
};

const links = document.getElementsByClassName('nav-link');
for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        onClickNav(link.id);
    });
}

const arrow = document.getElementById('fleche');
fleche.addEventListener('click', (e) => {
    e.preventDefault();
    onClickNav('aboutus');
});

function onClickNav(element) {
    const newElement = document.getElementById(`${element}-anchor`);
    const y = newElement.getBoundingClientRect().top + window.scrollY;
        window.scroll({
        top: y,
        behavior: 'smooth'
    });
}