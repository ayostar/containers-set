import Daemon from '../daemon';

test.each([
  [
    'Name',
    {
      name: 'Name',
      type: 'Daemon',
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
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ],
])(
  'should create hero - "Daemon", testing class Daemon',
  (params, recieved) => {
    const expected = new Daemon(params);

    expect(expected).toEqual(recieved);
  }
);
