import { generateTextTimerComponent } from "./uicomponents/TextTimer/TextTimer";

import { generateLightsaberTimerComponent } from './uicomponents/LightsaberTimer/LightsaberTimer';
export const App = ({ options }) => {

    document.getElementById('swquiz-app').appendChild(generateLightsaberTimerComponent());
};