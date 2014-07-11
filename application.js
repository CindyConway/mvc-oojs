$(document).ready(function(){
   var view = new View();
   var model = new Model(); 
   var controller = new Controller(view, model);
   controller.bindListeners();
});

function Controller(view, model){
  this.view = view;
  this.model = model;
}

Controller.prototype = {
  bindListeners: function() {
      $('#roller button.add').on('click', this.addDie.bind(this));
      $('#roller button.roll').on('click', this.rollDice.bind(this));
  },
  addDie: function(){
    this.view.addDie();
  },
  rollDice: function(){
    var dieCount = this.view.dieCount;
    for (i=0; i < dieCount; i++){ 
      this.view.updateDie(i, this.model.randomNumber());
    },
  }
}


function View(){
    this.dieCount = 0;
};

View.prototype = { 
  addDie: function(){
    $('.dice').append('<div class="die">0</div>');
    this.dieCount = $('.die').length;
  },
  updateDie: function(i, value){

    $('.die:eq(' + i + ')').text(value);
  },
}

function Model(){};

Model.prototype = {
  randomNumber: function () {
      return Math.floor((Math.random()*6)+1);
   },
}




  

