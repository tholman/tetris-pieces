

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

var drawFunctions = [

  square

]

function DrawFunctions(){};

DrawFunctions.prototype.getDrawFunction = function(index){

  return drawFunctions[0];
}