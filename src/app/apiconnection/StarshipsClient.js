async function getStarshipById(id) {
    const starship = await fetch(`https://swapi.dev/api/starships/${id}`);
    return starship.json();
}


async function getStarshipImageBlobById(starshipId) {
    const image = await fetch(`static/assets/img/modes/starships/${starshipId}.jpg`);
    return image.blob();
}

export { getStarshipById, getStarshipImageBlobById };