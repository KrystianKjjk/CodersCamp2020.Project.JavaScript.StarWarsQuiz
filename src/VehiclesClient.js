function getVehicleById(id) {
    return fetch(`https://swapi.dev/api/vehicles/${id}`).then(response => response.json());
}

function getVehicleImageBlobById(vehicleId) {
    return fetch(`static/assets/img/modes/vehicles/${vehicleId}.jpg`)
        .then(response => response.blob())
}

export { getVehicleById, getVehicleImageBlobById };