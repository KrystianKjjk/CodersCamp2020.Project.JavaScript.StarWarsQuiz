import createMainMenuOptions from "../src/app/uicomponents/mainmenuoptions/MainMenuOptions.js";

//define sample callback function
const callbackFunction = jest.fn();

//assign imported function 
document.body.appendChild(createMainMenuOptions(callbackFunction));
const button = document.body.querySelector("button");
const button2 = document.body.querySelectorAll("button")[2];

describe('Menu Options Selector test', () => {
    it('check if menu container was created', () => {
        expect(document.body.querySelector(".modeSelectorContainer")).toBeTruthy();
    })
    it('check if three buttons were created', () => {
        expect(document.body.querySelectorAll("button").length).toBe(3);
    })
    it('check if button changes the class after click', () => {
        button.click();
        expect(button.classList.contains("active")).toBeTruthy;
    })
    it('check if button \'active\' class is revoked after clicking on second button', () => {
        button.click();
        button2.click();
        expect(button.classList.contains("active")).toBeFalsy;
        expect(button2.classList.contains("active")).toBeFalsy;
    })
    it('check if callback function is called when button clicked', () => {
        button.click();
        expect(callbackFunction).toBeCalled();
    })
})
