$(function () {
  for (let j = 0; j < 5; j++) {
    const row = $('<div/>', {
      id: 'row-' + j,
      class: 'row',
    });

    $('#game-board').append(row);
    for (let i = 0; i < 4; i++) {
      const card = $('<div/>', {
        id: `${j}${i}`,
        class: 'card',
        title: 'card ' + i,
        text: 'cardhidden',
        properties: { isShown: false },
        on: {
          click: function (e) {
            flipCard(e.target.id);
          },
        },
      });
      $(row).append(card);
    }
  }

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
