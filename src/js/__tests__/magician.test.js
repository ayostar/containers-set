import Magician from '../magician';

test.each([
  [
    'Name',
    {
      name: 'Name',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
  [
    'Name',
    {
      name: 'Name',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
])(
  'should create hero - "Magician", testing class Magician',
  (params, recieved) => {
    const expected = new Magician(params);

    expect(expected).toEqual(recieved);
  }
);
