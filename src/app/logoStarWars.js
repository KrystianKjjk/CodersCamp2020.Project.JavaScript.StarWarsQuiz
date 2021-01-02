function logoStarWars() {
    const logo = document.createElement('div');
    logo.id = 'menu-logo';

    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    logo.appendChild(logoLink);

    const logoImg = document.createElement('img');
    logoImg.src = 'static/assets/ui/StarWarsLogo.png';
    logoImg.alt = 'Star Wars Logo';
    logoLink.appendChild(logoImg);

    return logo;
}

export default logoStarWars;