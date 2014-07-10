$(document).ready(bindListeners);

function bindListeners(){
 $('#roller button.add').on('click', addDice);
  $('#roller button.roll').on('click', rollDice);
}

  function addDice(){
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>');
  }

  function rollDice(){

    $('.die').each(randomNumber)
  }

  function randomNumber(){
      var value = Math.floor((Math.random()*6)+1);
     $(this).text(value);
   }