function getPersonById(id) {
    return fetch(`https://swapi.dev/api/people/${id}`).then(response => response.json());
}

function getPersonImageBlobById(personId) {
    return fetch(`static/assets/img/modes/people/${personId}.jpg`)
        .then(response => response.blob())
}

export { getPersonById, getPersonImageBlobById };