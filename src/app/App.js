import mainMenu from './uicomponents/MainMenu/MainMenu.js';


export async function App({ options }) {
    document.body.appendChild(await mainMenu());

    
};