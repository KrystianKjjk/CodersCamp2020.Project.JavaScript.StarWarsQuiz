function redButton(label, onClick, runGameFunction) {
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
      const selectedMode = document.querySelector(".active").innerHTML;
      onClick(runGameFunction, selectedMode);
    }); 
    
    return button;
  }

  export default redButton;