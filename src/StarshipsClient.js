async function GetStarshipById(id) {
    const starship = await fetch(`https://swapi.dev/api/starships/${id}`);
    return starship.json();
}


async function GetStarshipImageBlobById(starshipId) {
    const image = await fetch(`static/assets/img/modes/starships/${starshipId}.jpg`);
    return image.blob();
}

export { GetStarshipById, GetStarshipImageBlobById };