function redButton(label, onClick) {
    if (typeof label !== 'string') {
      throw Error('Label should be a string.');
    }

    if (typeof onClick !== 'function'){
      throw Error('OnClick should be a function.');
    }
    
    const button = document.createElement('button');
    button.className = 'button red-button';
    button.innerText = label;
    button.addEventListener('click', (e) => {
      onClick();
    }); 
    
    return button;
  }

  export default redButton;