import generateQuestions from '../src/QuestionsGenerator';
import * as PeopleClient from '../src/PeopleClient';

const mockBlob = new Blob(["Hello, world!"], { type: 'text/plain' });

describe('Questions Generator tests', () => {
    test('should throw error when invalid game mode', () => {
        expect(() => generateQuestions('invalidGameMode')).toThrow('Invalid game mode');
    })

    test('should generate questions for people game mode', async() => {
        jest.spyOn(global.Math, "random");
        jest.spyOn(PeopleClient, "getPersonById").mockResolvedValueOnce({ name: "Barriss Offee" })
            .mockResolvedValueOnce({ name: "Obi-Wan Kenobi" })
            .mockResolvedValueOnce({ name: "Ratts Tyerel" })
            .mockResolvedValueOnce({ name: "Jocasta Nu" });
        jest.spyOn(PeopleClient, "getPersonImageBlobById").mockResolvedValueOnce(mockBlob);

        const questionObject = await generateQuestions("People");
        expect(questionObject.answers.length).toBe(4); //Pytanie zawsze musi miec 4 odpowiedzi
        expect(questionObject.answers.includes(questionObject.rightAnswer)).toBeTruthy(); //Prawidlowa odpowiedz musi byc jedna z wylosowanych odpowiedzi
        expect(questionObject.image).toBeDefined(); //Image musi byc obecny
        expect(global.Math.random).toHaveBeenCalledTimes(5); //Math.random musi byc wywolane zawsze 5 razy (4 razy przy pierwszym losowaniu i raz przy drugim)
        expect(PeopleClient.getPersonById).toHaveBeenCalledTimes(4);
        expect(PeopleClient.getPersonImageBlobById).toHaveBeenCalledTimes(1);
    })

    // Dzieki zamockowaniu Math.random mozemy sprawdzic, czy getPersonById i getPersonImageBlobById jest wywolane z odpowiednimi wartosciami, 
    // jednakze jednoczesnie wedlug mnie ten test dotyka juz za bardzo implementacji. Dlatego osobiscie chyba bym zrezygnowal z mockowania tego
    // i pozostal przy samym sprawdzeniu, ze Math.random zostalo wywolane 5 razy (4 razy przy pierwszym losowaniu i raz przy drugim).

    // test('should generate questions for people game mode', async() => {
    //     jest.spyOn(global.Math, "random").mockReturnValue(0);
    //     jest.spyOn(PeopleClient, "getPeople").mockResolvedValue({ count: 82 });
    //     jest.spyOn(PeopleClient, "getPersonById").mockResolvedValueOnce({ name: "Barriss Offee" })
    //         .mockResolvedValueOnce({ name: "Obi-Wan Kenobi" })
    //         .mockResolvedValueOnce({ name: "Ratts Tyerel" })
    //         .mockResolvedValueOnce({ name: "Jocasta Nu" });
    //     jest.spyOn(PeopleClient, "getPersonImageBlobById").mockResolvedValueOnce(mockBlob);

    //     const questionObject = await generateQuestions("People");
    //     expect(questionObject.answers.length).toBe(4);
    //     expect(questionObject.answers.includes(questionObject.rightAnswer)).toBeTruthy();
    //     expect(questionObject.image).toBeDefined();
    //     expect(global.Math.random).toHaveBeenCalledTimes(5);
    //     expect(PeopleClient.getPersonById).toHaveBeenNthCalledWith(1, 1);
    //     expect(PeopleClient.getPersonById).toHaveBeenNthCalledWith(2, 2);
    //     expect(PeopleClient.getPersonById).toHaveBeenNthCalledWith(3, 3);
    //     expect(PeopleClient.getPersonById).toHaveBeenNthCalledWith(4, 4);
    //     expect(PeopleClient.getPersonImageBlobById).toHaveBeenNthCalledWith(1, 1);
    // })

    test('should generate questions for starships game mode', () => {

    })

    test('should generate questions for vehicles game mode', () => {

    })

})