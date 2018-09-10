const rand = max => Math.random() * max | 0;
const generateData = {
    favorites: [],
    scripts: [],
    states: []
};

const types = [
        'light',
        'temperature',
        'time'
    ],
    filters = [
        'Кухня',
        'Зал',
        'Лампочки',
        'Камеры'
    ],
    isActives = [
        true, 
        false
    ],
    states = [
        'Выключить что-то',
        'Включить что-то'
    ],
    statesStart = [
        'Начнеться тогда-то',
        'Закончиться тогда-то',
        ''
    ];

for (let i = 0; i < 10; i++) {
    const name = `name_${i}`;
    const filter = filters[rand(filters.length)];
    const type = types[i < 3 ? i : rand(types.length)];
    const state = states[rand(states.length)];
    const isActive = isActives[rand(isActives.length)];
    const stateStart = statesStart[rand(statesStart.length)];

    generateData.favorites.push({
        name,
        state,
        type,
        isActive,
        task: type !== 'time' ? 'scroller' : 'roller',
        filter,
        value: type !== 'time' ? rand(31) - 10 : rand(21)
    });

    generateData.scripts.push({
        name: state,
        state: stateStart,
        type,
        isActive
    });

    generateData.states.push({
        name,
        state,
        type,
        isActive
    });
}

module.exports = generateData;