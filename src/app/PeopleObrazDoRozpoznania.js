function peopleObrazDoRozpoznania(obraz) {
    const img = document.createElement('img');
    img.src = `data:image/png;base64,${obraz}`;
    img.alt = `obraz People`;
    return img;
}