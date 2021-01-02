function whiteIconButton(label, icon) {
    if (typeof label !== 'string') {
      throw Error('Label is not string.');
    }

    if (!(icon instanceof HTMLElement)) {
      throw Error('Icon is not HTMLElement');
    }

    const button = document.createElement('button');
    button.className = 'white-icon-button';
    const labelElement = document.createElement('span');
    const labelElementContent = document.createTextNode(label);
    labelElement.appendChild(labelElementContent);
    button.appendChild(icon);
    button.appendChild(labelElement);
  
    return button;
  }

  export default whiteIconButton;