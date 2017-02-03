/**
 * Updater, controls time and speed.
 */

function Updater(){
  
  this.lastUpdateTime = Date.now();
  this.deltaThreshold = 600; // MS before each update
  this.updateCallback = null;

  window.requestAnimFrame = function(){ // Polyfill
  return (
    window.requestAnimationFrame     ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame  ||
    window.oRequestAnimationFrame    ||
    window.msRequestAnimationFrame   ||
    function(callback){
    window.setTimeout(callback, 1000 / 60);
    }
  );
  }();
};

Updater.prototype.onUpdate = function(callback){
  this.updateCallback = callback;
};

Updater.prototype.doUpdate = function(timestamp){

  if(this.updateCallback != null){
  this.updateCallback();
  }
  
  this.lastUpdateTime = timestamp;
};

Updater.prototype.checkUpdate = function(timestamp){
  
  var self = this;
  var delta = timestamp - this.lastUpdateTime;

  if (delta > this.deltaThreshold){
  this.doUpdate(timestamp);
  }

  window.requestAnimFrame(function(){
  self.checkUpdate(Date.now());
  });

};
