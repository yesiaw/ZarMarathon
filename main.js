const player1 = {
    name: 'liukang',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['pistol'],
    attack: function() {
        console.log(this.name + 'Fight');
    },
};

const player2 = {
    name: 'sonya',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['hands'],
    attack: function() {
        console.log(this.name + 'Fight');
    },
};

const createPlayer = (player, { name: heroName, hp, img: image }) => {
    const generalDiv = document.createElement('div');
    generalDiv.classList.add(player);
    
    const progressbar =  document.createElement('div');
    progressbar.classList.add('progressbar');

    const character =  document.createElement('div');
    character.classList.add('character');

    generalDiv.appendChild(progressbar);
    generalDiv.appendChild(character);

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = hp + '%';

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = heroName;

    progressbar.appendChild(life);
    progressbar.appendChild(name);
    
    const img = document.createElement('img');
    character.appendChild(img);
    img.src = image;

    const arena = document.querySelector('.arenas');
    arena.appendChild(generalDiv);
};
createPlayer('player1', player1);
createPlayer('player2', player2);
