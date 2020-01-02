import Magician from '../js/class/Magician.js';
import Swordsman from '../js/class/Swordsman.js';
import Team from '../js/class/Team.js';

test('Добавление персонажа', () => {
  const magician = new Magician('Igor');
  const team = new Team();
  team.add(magician);

  const received = team.toArray();
  const expected = [{
    name: 'Igor',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }];

  expect(received).toEqual(expected);
});

test('Добавление группы персонажей', () => {
  const firstMagician = new Magician('Igor');
  const secondMagician = new Magician('Max');
  const team = new Team();
  team.addAll(firstMagician, secondMagician);

  const received = team.toArray();
  const expected = [{
    name: 'Igor',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  },
  {
    name: 'Max',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  }];

  expect(received).toEqual(expected);
});

test('Повторный выбор персонажа', () => {
  const swordsman = new Swordsman('Serg');
  const team = new Team();
  team.add(swordsman);

  expect(() => {
    team.add(swordsman);
  }).toThrow();
});
