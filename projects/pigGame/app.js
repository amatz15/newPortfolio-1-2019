/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

startNew();

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.btn-roll').addEventListener('click', function () {

    //Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //Display result
    var diceDOM = document.querySelector('.dice');
    document.querySelector('.dice').style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        //Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {

    //Add to score
    scores[activePlayer] += roundScore;

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Hit 100 = WINNER
    if (scores[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    } else {
        nextPlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click', startNew);

function startNew() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}






//
//var x = document.querySelector('#score-0').textContent;
