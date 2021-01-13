function whiteIconButton(label, icon, onClick) {
    if (typeof label !== 'string') {
      throw Error('Label is not a string.');
    }

    if (!(icon instanceof HTMLElement)) {
      throw Error('Icon is not HTMLElement');
    }

    if (typeof onClick !== 'function'){
      throw Error('OnClick is not a function.');
    }

    const button = document.createElement('button');
    button.className = 'button white-icon-button';
    const labelElement = document.createElement('span');
    const labelElementContent = document.createTextNode(label);
    labelElement.appendChild(labelElementContent);
    button.appendChild(icon);
    button.appendChild(labelElement);
    button.addEventListener('click', (e) => {
      onClick();
    }); 
  
    return button;
  }

  export default whiteIconButton;