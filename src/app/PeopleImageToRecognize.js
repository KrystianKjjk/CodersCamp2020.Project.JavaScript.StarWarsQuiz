function peopleImageToRecognize(base64) {
    const img = document.createElement('img');
    img.src = `data:image/png;base64,${base64}`;
    img.alt = `obraz People`;
    return img;
}