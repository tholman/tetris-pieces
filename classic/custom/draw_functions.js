

function square(context, x, y, width, height) {

  var unitWidth = 0.125 * width;
  
  // Border
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#C6CFA4";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

}

function jay(context, x, y, width, height) {

  var unitWidth = 0.125 * width;

  // Border
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#92BE7C";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

  context.fillStyle = "#C6CFA4";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
}

function ell(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;
  
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);
  
  context.fillStyle = "#3C6A4E";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

}

function zee(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;
  
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#92BE7C";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
  
}

function ess(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;

  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#3C6A4E";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

  context.fillStyle = "#C6CFA4";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
}

function tee(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;

  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#92BE7C";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#C6CFA4";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth, height - unitWidth * 4);
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth * 4, unitWidth);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 5, unitWidth * 4, unitWidth);
  context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 3, unitWidth, unitWidth * 3);

}

var eyes = [
  //h1
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth, height - unitWidth * 2);
    
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x, height * y + unitWidth, width, height - unitWidth * 2);

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;

    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x, height * y + unitWidth, width, height - unitWidth * 2);

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x, height * y + unitWidth, width - unitWidth, height - unitWidth * 2);
  },

  // v1
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth);

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height);
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height);
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#92BE7C";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height - unitWidth);
  }
]

var drawFunctions = [

  square,

  jay,

  ell,

  zee,

  ess,

  tee,

  eyes

]

function DrawFunctions(){};

DrawFunctions.prototype.getDrawFunction = function(index){

  if( drawFunctions[index]) {
    return drawFunctions[index];
  } else {
    return drawFunctions[5];
  }
}