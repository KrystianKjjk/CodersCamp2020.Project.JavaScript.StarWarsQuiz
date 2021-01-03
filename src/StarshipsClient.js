function getStarshipById(id) {
    return fetch(`https://swapi.dev/api/starships/${id}`).then(response => response.json());
}


function getStarshipImageBlobById(starshipId) {
    return fetch(`static/assets/img/modes/starships/${starshipId}.jpg`)
        .then(response => response.blob())
}

export { getStarshipById, getStarshipImageBlobById };