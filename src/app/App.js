import { generateTextTimerComponent } from './uicomponents/TextTimer/TextTimer';
export const App = ({ options }) => {

    const olddiv = document.getElementById('swquiz-app').appendChild(generateTextTimerComponent());

};