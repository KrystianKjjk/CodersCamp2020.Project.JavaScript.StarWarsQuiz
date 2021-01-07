import { generateTextTimerComponent } from './uicomponents/TextTimer/TextTimer';
export const App = ({ options }) => {

    const olddiv = document.getElementById('swquiz-app').appendChild(generateTextTimerComponent());
    // const myDiv = document.createElement('div');
    // olddiv.appendChild(myDiv);
    // const textNode = document.createTextNode('aaa');
    // myDiv.appendChild(textNode);

    //return myDiv;

};