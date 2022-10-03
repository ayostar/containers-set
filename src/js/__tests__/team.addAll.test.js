import Team from '../team';
import Daemon from '../daemon';
import Undead from '../undead';

test('Shoud test class Team - method addAll()', () => {
  const newTeam = new Team();
  const daemon1 = new Daemon('Dimon');
  const daemon2 = new Daemon('DimonPoke');
  const undead1 = new Undead('Undrey');

  const arrayCharacters = [daemon1, daemon2, undead1];
  const expected = new Set(arrayCharacters);

  newTeam.addAll(...arrayCharacters);
  expect(expected).toEqual(newTeam.members);

  arrayCharacters.push({ notinstanceOf: 'Character' });
  newTeam.addAll(...arrayCharacters);

  expect(expected).toEqual(newTeam.members);
});
