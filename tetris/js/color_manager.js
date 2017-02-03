/**
 * Color Manager
 * - Handles the slow hue rotations of colors
 */

function ColorManager( baseColor ){
  this.hueRotation = 0;
  this.rotationSpeed = 5;
  this.baseColor = '#F0C9DD'; // Light pink
};

ColorManager.prototype.getColor = function(){

  // Rotate hue's for every new piece.
  this.hueRotation += this.rotationSpeed;
  if( this.hueRotation > 360 ) {
    this.hueRotation = 0;
  }

  return changeHue(this.baseColor, this.hueRotation);
};