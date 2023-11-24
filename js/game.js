'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    const indexOfFirstElem = FIGURES_RUS.indexOf(FIGURES_RUS[0]);
    const indexOfLastElem =
      FIGURES_RUS.indexOf(FIGURES_RUS[FIGURES_RUS.length - 1]);

    return function start() {
      const computer =
        FIGURES_RUS[getRandomIntInclusive(indexOfFirstElem, indexOfLastElem)];
      let player = prompt('камень, ножницы, бумага?');
      let resOfGame = '';

      if (player === '') {
        return start();
      }

      if (player === null) {
        const isGoOut = confirm('Вы точно хотите покинуть игру?');

        if (isGoOut) {
          alert(`
        Результат:
          Компьютер ${result.computer}
          Игрок ${result.player}`);
          return;
        } else {
          return start();
        }
      }

      player = FIGURES_RUS.find(item =>
        item.startsWith(player.toLowerCase()));

      if (!player) {
        return start();
      }

      if (player[0] === computer[0]) {
        resOfGame = 'Ничья';
      } else if (player[0] === 'к' && computer[0] === 'н' ||
      player[0] === 'н' && computer[0] === 'б' ||
      player[0] === 'б' && computer[0] === 'к') {
        result.player++;
        resOfGame = 'Вы выйграли';
      } else {
        result.computer++;
        resOfGame = 'Компьютер выйграл';
      }

      alert(`
        Компьютер: ${computer}
        Вы: ${player}
        ${resOfGame}`);

      if (resOfGame === 'Ничья') {
        return start();
      }

      const isContinue = confirm('Еще?');

      if (isContinue) {
        return start();
      } else {
        alert(`
        Результат:
          Компьютер ${result.computer}
          Игрок ${result.player}`);
      }
    };
  };

  window.rps = game;
})();
