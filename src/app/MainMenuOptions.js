const createMainMenuOptions = (func) => {
    let options = ['People', 'Vehicles', 'Starships'];      
    let mainMenuDiv, menuButton, buttonText;        //variables definition

    mainMenuDiv = document.createElement('div');    //create container for menu
    mainMenuDiv.className = 'mainMenuContainer';    

    //create buttons and append to menu container
    for (let i = 0; i < 3; i++) {
        menuButton = document.createElement('button');
        menuButton.className = 'mainMenuButton';
        menuButton.setAttribute('onclick','menuButtonOnclick()');
        menuButton.id = options[i];
        buttonText = document.createTextNode(options[i]);
        menuButton.appendChild(buttonText);
        mainMenuDiv.appendChild(menuButton);
    }

    //append menu to body, to be changed once there will be a place to append
    document.body.appendChild(mainMenuDiv);
    
}

//button onclick function for changing the active styling
const menuButtonOnclick = () => {
    
    const buttons = document.querySelectorAll('.mainMenuButton');       //get all buttons
    for (let i = 0; i < buttons.length; i++){       //remove active class from all buttons
        buttons[i].className = 'mainMenuButton';    
    }
    event.target.classList.add('active');       //set current button's class to active
}


export default createMainMenuOptions;