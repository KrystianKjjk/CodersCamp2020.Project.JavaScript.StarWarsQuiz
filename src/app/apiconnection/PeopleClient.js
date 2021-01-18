async function getPersonById(id) {
    const person = await fetch(`https://swapi.dev/api/people/${id}/`);
    return person.json();
}

async function getPersonImageBlobById(personId) {
    const image = await fetch(`static/assets/img/modes/people/${personId}.jpg`)
    return image.blob();
}

export { getPersonById, getPersonImageBlobById };