async function getVehicleById(id) {
    const vehicle = await fetch(`https://swapi.dev/api/vehicles/${id}/`);
    return vehicle.json();
}

async function getVehicleImageBlobById(vehicleId) {
    const image = await fetch(`static/assets/img/modes/vehicles/${vehicleId}.jpg`);
    return image.blob();
}

export { getVehicleById, getVehicleImageBlobById };