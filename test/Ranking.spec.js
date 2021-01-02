import displayRanking from '../src/app/Ranking.js';

describe('Ranking test', () => {
  it('returns HTMLElement', () => {
    const data = [
      { name: 'Ania', points: '15/20' },
      { name: 'Mateusz', points: '14/30' },
      { name: 'Leia Organa', points: '1/23' },
    ];

    expect(displayRanking(data)).toBeInstanceOf(HTMLElement);
  });
  it('throws error when length of list is higher than 3', () => {
    const data = [
      { name: 'Ania', points: '15/20' },
      { name: 'Mateusz', points: '14/30' },
      { name: 'Julia', points: '10/30' },
      { name: 'Leia Organa', points: '1/23' },
    ];

    expect(() => displayRanking(data)).toThrowError(
      'List of users cannot have more than three players.',
    );
  });
});
