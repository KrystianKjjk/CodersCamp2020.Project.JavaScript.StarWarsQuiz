async function GetVehicleById(id) {
    const vehicle = await fetch(`https://swapi.dev/api/vehicles/${id}`);
    return vehicle.json();
}

async function GetVehicleImageBlobById(vehicleId) {
    const image = await fetch(`static/assets/img/modes/vehicles/${vehicleId}.jpg`);
    return image.blob();
}

export { GetVehicleById, GetVehicleImageBlobById };