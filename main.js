const cards = ['heart', 'heart', 'diamond', 'diamond', 'club', 'club'];
let randomNumber = Math.floor(Math.random() * 10);

assignCards = function (i) {
  while (i < cards.length) {
    console.log(Math.floor(Math.random() * 10));
    i++;
  }
};

assignCards(0);

$(function () {
  initializeBoard = function () {
    for (let j = 0; j < 2; j++) {
      const row = $('<div/>', {
        id: 'row-' + j,
        class: 'row',
      });

      $('#game-board').append(row);
      for (let i = 0; i < 3; i++) {
        const card = $('<div/>', {
          id: `${j}${i}`,
          class: 'card',
          title: 'card ' + i,
          text: 'cardhidden',
          on: {
            click: function (e) {
              flipCard(e.target.id);
            },
          },
        });
        $(row).append(card);
      }
    }
  };

  initializeBoard();

  flipCard = function (id) {
    const $card = $('#' + id);
    if ($card.prop('isShown')) {
      $card.html('cardhidden');
      $card.prop('isShown', !$card.prop('isShown'));
    } else {
      $card.html('cardshown');
      $card.prop('isShown', !$card.prop('isShown'));
    }
    //toggles the isShown prop back and forth
  };
});
