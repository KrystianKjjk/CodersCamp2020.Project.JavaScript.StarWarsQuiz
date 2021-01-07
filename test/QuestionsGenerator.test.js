import generateQuestions from '../src/app/logic/questionsGenerator/QuestionsGenerator';
import * as PeopleClient from '../src/app/apiconnection/PeopleClient';
import * as StarshipsClient from '../src/app/apiconnection/StarshipsClient';
import * as VehiclesClient from '../src/app/apiconnection/VehiclesClient';
import { GameModes } from '../src/app/Consts';

const mockBlob = new Blob(["Hello, world!"], { type: 'text/plain' });

describe('Questions Generator tests', () => {
    beforeEach(() => {
        jest.spyOn(global.Math, "random");
    })

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    test('should throw error when invalid game mode', () => {
        expect(generateQuestions('invalidGameMode')).rejects.toEqual(TypeError('Invalid game mode'));
    })

    test('should generate questions for people game mode', async() => {
        jest.spyOn(PeopleClient, "getPersonById").mockResolvedValueOnce({ name: "Barriss Offee" })
            .mockResolvedValueOnce({ name: "Obi-Wan Kenobi" })
            .mockResolvedValueOnce({ name: "Ratts Tyerel" })
            .mockResolvedValueOnce({ name: "Jocasta Nu" });
        jest.spyOn(PeopleClient, "getPersonImageBlobById").mockResolvedValueOnce(mockBlob);

        const questionObject = await generateQuestions(GameModes.PEOPLE);
        expect(questionObject.answers.length).toBe(4);
        expect(questionObject.answers.includes(questionObject.rightAnswer)).toBeTruthy();
        expect(questionObject.image).toBeDefined();
        expect(global.Math.random).toHaveBeenCalledTimes(5);
        expect(PeopleClient.getPersonById).toHaveBeenCalledTimes(4);
        expect(PeopleClient.getPersonImageBlobById).toHaveBeenCalledTimes(1);
    })

    test('should generate questions for starships game mode', async() => {
        jest.spyOn(StarshipsClient, "getStarshipById").mockResolvedValueOnce({ name: "A-wing" })
            .mockResolvedValueOnce({ name: "Imperial shuttle" })
            .mockResolvedValueOnce({ name: "B-wing" })
            .mockResolvedValueOnce({ name: "Calamari Cruiser" });
        jest.spyOn(StarshipsClient, "getStarshipImageBlobById").mockResolvedValueOnce(mockBlob);

        const questionObject = await generateQuestions(GameModes.STARSHIPS);
        expect(questionObject.answers.length).toBe(4);
        expect(questionObject.answers.includes(questionObject.rightAnswer)).toBeTruthy();
        expect(questionObject.image).toBeDefined();
        expect(global.Math.random).toHaveBeenCalledTimes(5);
        expect(StarshipsClient.getStarshipById).toHaveBeenCalledTimes(4);
        expect(StarshipsClient.getStarshipImageBlobById).toHaveBeenCalledTimes(1);
    })

    test('should generate questions for vehicles game mode', async() => {
        jest.spyOn(VehiclesClient, "getVehicleById").mockResolvedValueOnce({ name: "Multi-Troop Transport" })
            .mockResolvedValueOnce({ name: "Vulture Droid" })
            .mockResolvedValueOnce({ name: "C-9979 landing craft" })
            .mockResolvedValueOnce({ name: "X-34 landspeeder" });
        jest.spyOn(VehiclesClient, "getVehicleImageBlobById").mockResolvedValueOnce(mockBlob);

        const questionObject = await generateQuestions(GameModes.VEHICLES);
        expect(questionObject.answers.length).toBe(4);
        expect(questionObject.answers.includes(questionObject.rightAnswer)).toBeTruthy();
        expect(questionObject.image).toBeDefined();
        expect(global.Math.random).toHaveBeenCalledTimes(5);
        expect(VehiclesClient.getVehicleById).toHaveBeenCalledTimes(4);
        expect(VehiclesClient.getVehicleImageBlobById).toHaveBeenCalledTimes(1);


    })

})