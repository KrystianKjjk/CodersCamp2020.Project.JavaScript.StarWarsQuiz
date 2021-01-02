function redButton(label) {
    if (typeof label !== 'string') {
      throw Error('Label is not string.');
    }
    
    const button = document.createElement('button');
    button.className = 'red-button';
    button.innerText = label;
    
    return button;
  }

  export default redButton;