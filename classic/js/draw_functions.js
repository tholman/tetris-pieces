

function square(context, x, y, width, height) {

  context.fillStyle = "#000";
  context.fillRect(width * x, height * y, width, height);

  context.strokeStyle = "#C6CFA4";
  context.lineWidth = 6;
  context.strokeRect(width * x + 10, height * y + 10, width - 20, height - 20);

}

var drawFunctions = [

  square

]

function DrawFunctions(){};

DrawFunctions.prototype.getDrawFunction = function(index){

  return drawFunctions[0];
}