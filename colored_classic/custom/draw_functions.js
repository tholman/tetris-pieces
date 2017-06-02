

function square(context, x, y, width, height) {

  var unitWidth = 0.125 * width;
  
  // Border
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#EDBF3B";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

}

function jay(context, x, y, width, height) {

  var unitWidth = 0.125 * width;

  // Border
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#3B78A7";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

  context.fillStyle = "#fff";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
}

function ell(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;
  
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);
  
  context.fillStyle = "#B82C2D";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

}

function zee(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;
  
  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#EDBF3B";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
  
}

function ess(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;

  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#C24175";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#000";
  context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, width - unitWidth * 4, height - unitWidth * 4);

  context.fillStyle = "#fff";
  context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, width - unitWidth * 6, height - unitWidth * 6);
}

function tee(context, x, y, width, height) {
  
  var unitWidth = 0.125 * width;

  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.fillStyle = "#498E4D";
  context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth * 2);

  context.fillStyle = "#fff";

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

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 3, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 3, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 6, unitWidth, unitWidth);

    
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x, height * y + unitWidth, width, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 7, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);
    

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;

    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x, height * y + unitWidth, width, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 7, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x, height * y + unitWidth, width - unitWidth, height - unitWidth * 2);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 0, height * y + unitWidth * 1, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 6, unitWidth, unitWidth);
  },

  // v1
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y + unitWidth, width - unitWidth * 2, height - unitWidth);

    // Dots
    context.fillStyle = "#874437";
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth, unitWidth, unitWidth);
    
    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 6, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 6, unitWidth, unitWidth);

  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height);

    // Dots
    context.fillStyle = "#874437";

    context.fillRect(width * x + unitWidth * 3, height * y, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 7, unitWidth, unitWidth);
  
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height);

    // Dots
    context.fillStyle = "#874437";

    context.fillRect(width * x + unitWidth * 3, height * y, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 5, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 6, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 7, unitWidth, unitWidth);
  },
  function(context, x, y, width, height) {

    var unitWidth = 0.125 * width;
    
    context.fillStyle = "#000";
    context.fillRect(width * x, height * y, width, height);

    context.fillStyle = "#C28549";
    context.fillRect(width * x + unitWidth, height * y, width - unitWidth * 2, height - unitWidth);

    // Dots
    context.fillStyle = "#874437";

    context.fillRect(width * x + unitWidth * 6, height * y, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 1, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 2, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 5, height * y + unitWidth * 2, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 3, height * y + unitWidth * 3, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 1, height * y + unitWidth * 4, unitWidth, unitWidth);
    context.fillRect(width * x + unitWidth * 6, height * y + unitWidth * 4, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 4, height * y + unitWidth * 5, unitWidth, unitWidth);

    context.fillRect(width * x + unitWidth * 2, height * y + unitWidth * 6, unitWidth, unitWidth);
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