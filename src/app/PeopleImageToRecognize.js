function peopleImageToRecognize(base64) {
    if (typeof base64 !== 'string') throw Error('Pass base64 string as function argument');
    const img = document.createElement('img');
    img.src = `data:image/png;base64,${base64}`;
    img.alt = `obraz People`;
    return img;
}