async function GetPersonById(id) {
    const person = await fetch(`https://swapi.dev/api/people/${id}`);
    return person.json();
}

async function GetPersonImageBlobById(personId) {
    const image = await fetch(`static/assets/img/modes/people/${personId}.jpg`)
    return image.blob();
}

export { GetPersonById, GetPersonImageBlobById };