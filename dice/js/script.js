// (input)-data
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");

//random-numbers-generator
const playerRndNum = Math.floor(Math.random() * 6) + 1;
const computerRndNum = Math.floor(Math.random() * 6) + 1;

result.addEventListener("click",  function () {
    // final-result
    let result;

    // conditions
    if(playerRndNum > computerRndNum) {
        result = "Player won!"
    } else if (playerRndNum < computerRndNum) {
        result = "Computer won!";
    } else {
        result = "Tie!"
    };

    //output-data
    player.innerHTML = playerRndNum;
    computer.innerHTML = computerRndNum;
    result.innerHTML = result;
    alert(result);
});