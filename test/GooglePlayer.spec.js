import createPlayer from '../src/app/logic/Players/GooglePlayer/GooglePlayer';

describe('Google Player function tests', () => {
    it('returns object', () => {
        const googlePlayer = createPlayer();
        expect(typeof googlePlayer).toBe('object');
    })

});