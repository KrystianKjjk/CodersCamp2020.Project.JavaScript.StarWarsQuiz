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
      let selectedMode;
      try{
        selectedMode = document.querySelector(".active").innerHTML;
      }
      catch(error){}

      onClick(runGameFunction, selectedMode);
    }); 
    
    return button;
  }

  export default redButton;