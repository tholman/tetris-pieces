

// http://stackoverflow.com/questions/17433015/change-the-hue-of-a-rgb-color-in-javascript
// TODO: Clean up

function changeHue(rgb, degree) {
    var hsl = rgbToHSL(rgb);
    hsl.h += degree;
    if (hsl.h > 360) {
        hsl.h -= 360;
    }
    else if (hsl.h < 0) {
        hsl.h += 360;
    }
    return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb) {
    // strip the leading # if it's there
    rgb = rgb.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(rgb.length == 3){
        rgb = rgb.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(rgb.substr(0, 2), 16) / 255,
        g = parseInt(rgb.substr(2, 2), 16) / 255,
        b = parseInt(rgb.substr(4, 2), 16) / 255,
        cMax = Math.max(r, g, b),
        cMin = Math.min(r, g, b),
        delta = cMax - cMin,
        l = (cMax + cMin) / 2,
        h = 0,
        s = 0;

    if (delta == 0) {
        h = 0;
    }
    else if (cMax == r) {
        h = 60 * (((g - b) / delta) % 6);
    }
    else if (cMax == g) {
        h = 60 * (((b - r) / delta) + 2);
    }
    else {
        h = 60 * (((r - g) / delta) + 4);
    }

    if (delta == 0) {
        s = 0;
    }
    else {
        s = (delta/(1-Math.abs(2*l - 1)))
    }

    return {
        h: h,
        s: s,
        l: l
    }
}

// expects an object and returns a string
function hslToRGB(hsl) {
    var h = hsl.h,
        s = hsl.s,
        l = hsl.l,
        c = (1 - Math.abs(2*l - 1)) * s,
        x = c * ( 1 - Math.abs((h / 60 ) % 2 - 1 )),
        m = l - c/ 2,
        r, g, b;

    if (h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else {
        r = c;
        g = 0;
        b = x;
    }

    r = normalize_rgb_value(r, m);
    g = normalize_rgb_value(g, m);
    b = normalize_rgb_value(b, m);

    return rgbToHex(r,g,b);
}

function normalize_rgb_value(color, m) {
    color = Math.floor((color + m) * 255);
    if (color < 0) {
        color = 0;
    }
    return color;
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
/**
 * Color Manager
 * - Handles the slow hue rotations of colors
 */

function ColorManager( baseColor ){
  this.hueRotation = 0;
  this.rotationSpeed = 4;
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
/**
 * Grid
 * - Manages the state of the grid
 */

// Init
function Grid(rows, columns){
  
  this.rows = rows;
  this.columns = columns;
  this.cells = new Array(rows);

  // For each row!
  // Has a column
  // Which has X cells in it.
  for (var r = 0; r < this.rows; r++) {
    
    this.cells[r] = new Array(this.columns);
    for(var c = 0; c < this.columns; c++){
      this.cells[r][c] = 0;
    }
  }

};

// Methods
Grid.prototype.clone = function(){
  var _grid = new Grid(this.rows, this.columns);
  for (var r = 0; r < this.rows; r++) {
    for(var c = 0; c < this.columns; c++){
      _grid.cells[r][c] = this.cells[r][c];
    }
  }
  return _grid;
};

// Clear spaces in the grid, including when the blocks "fall"
Grid.prototype.clearLines = function(){
  
  var distance = 0;
  var row = new Array(this.columns);
  
  for(var r = this.rows - 1; r >= 0; r--){
  
    // Clear full line
    if (this.isLine(r)){
      
      distance++;
      for(var c = 0; c < this.columns; c++){
      this.cells[r][c] = 0;
      }

    // Clear moved spaces
    } else if (distance > 0) {
      
      for(var c = 0; c < this.columns; c++){
        this.cells[r + distance][c] = this.cells[r][c];
        this.cells[r][c] = 0;
      }
    }
  }
};

// If every item in the row has an item!
Grid.prototype.isLine = function(row){
  for(var c = 0; c < this.columns; c++){
  if (this.cells[row][c] == 0){
    return false;
  }
  }
  return true;
};

Grid.prototype.isEmptyRow = function(row){
  for(var c = 0; c < this.columns; c++){

    // TH: != 0 rather than == 1
    if (this.cells[row][c] != 0){
      return false;
    }
  }
  return true;
};

Grid.prototype.exceeded = function(){
  return !this.isEmptyRow(0) || !this.isEmptyRow(1);
};

Grid.prototype.height = function(){
  var r = 0;
  for(; r < this.rows && this.isEmptyRow(r); r++);
  return this.rows - r;
};

Grid.prototype.lines = function(){
  var count = 0;
  for(var r = 0; r < this.rows; r++){
    if (this.isLine(r)){
      count++;
    }
  }
  return count;
};

Grid.prototype.holes = function(){
  var count = 0;
  
  for(var c = 0; c < this.columns; c++){
    var block = false;
    for(var r = 0; r < this.rows; r++){
      
      // TH: != 0 rather than == 1
      if (this.cells[r][c] != 0) {
        block = true;
      }else if (this.cells[r][c] == 0 && block){
        count++;
      }
    }
  }
  return count;
};

Grid.prototype.blockades = function(){
  var count = 0;
  
  for(var c = 0; c < this.columns; c++){
    var hole = false;
    for(var r = this.rows - 1; r >= 0; r--){
      if (this.cells[r][c] == 0){
        hole = true;

      // TH: != 0 rather than == 1
      }else if (this.cells[r][c] != 0 && hole){
        count++;
      }
    }
  }
  return count;
}

Grid.prototype.aggregateHeight = function(){
  var total = 0;
  
  for(var c = 0; c < this.columns; c++){
    total += this.columnHeight(c);
  }
  return total;
};

Grid.prototype.bumpiness = function(){
  var total = 0;
  for(var c = 0; c < this.columns - 1; c++){
    total += Math.abs(this.columnHeight(c) - this.columnHeight(c+ 1));
  }
  return total;
}

Grid.prototype.columnHeight = function(column){
  var r = 0;

  for(; r < this.rows && this.cells[r][column] == 0; r++);
  return this.rows - r;
};

// Piece
Grid.prototype.addPiece = function(piece) {

  for(var r = 0; r < piece.cells.length; r++) {
    for (var c = 0; c < piece.cells[r].length; c++) {
      
      var _r = piece.row + r;
      var _c = piece.column + c;

      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0 && _r >= 0){

        // TH: Updates color, rather than 1
        if (piece.cells[r][c] > 1) {
          var num = piece.cells[r][c] - 2;
          this.cells[_r][_c] = piece.color[num];
        } else {
          this.cells[_r][_c] = piece.color;
        }
      }

    }
  }
};

Grid.prototype.valid = function(piece){
  
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r;
      var _c = piece.column + c;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0){
        if (!(_c < this.columns && _r < this.rows && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.canMoveDown = function(piece){
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r + 1;
      var _c = piece.column + c;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0 && _r >= 0){
        
        if (!(_r < this.rows && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.canMoveLeft = function(piece){
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r;
      var _c = piece.column + c - 1;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0){
        if (!(_c >= 0 && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.canMoveRight = function(piece){
  for(var r = 0; r < piece.cells.length; r++){
    for(var c = 0; c < piece.cells[r].length; c++){
      var _r = piece.row + r;
      var _c = piece.column + c + 1;
      
      // TH: != 0 rather than == 1
      if (piece.cells[r][c] != 0){
        if (!(_c >= 0 && this.cells[_r][_c] == 0)){
          return false;
        }
      }
    }
  }
  return true;
};

Grid.prototype.rotateOffset = function(piece){
  
  console.log("rotate?");

  var _piece = piece.clone();
  _piece.rotate(1);
  if (this.valid(_piece)) {
    return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
  }

  // Kicking
  var initialRow = _piece.row;
  var initialCol = _piece.column;

  for (var i = 0; i < _piece.dimension - 1; i++) {
    _piece.column = initialCol + i;
    if (this.valid(_piece)) {
      return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
    }

    for (var j = 0; j < _piece.dimension - 1; j++) {
      _piece.row = initialRow - j;
      if (this.valid(_piece)) {
        return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
      }
    }
    _piece.row = initialRow;
  }
  _piece.column = initialCol;

  for (var i = 0; i < _piece.dimension - 1; i++) {
    _piece.column = initialCol - i;
    if (this.valid(_piece)) {
      return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
    }

    for (var j = 0; j < _piece.dimension - 1; j++) {
      _piece.row = initialRow - j;
      if (this.valid(_piece)) {
        return {rowOffset: _piece.row - piece.row, columnOffset:_piece.column - piece.column};
      }
    }
    _piece.row = initialRow;
  }
  _piece.column = initialCol;

  return null;
};

/**
 * Piece
 * - Represents a single piece on the board.
 */

// Object that represents a single piece & its properties.
function Piece(cells, color){
  this.cells = cells;
  this.dimension = this.cells.length;
  this.row = 0;
  this.column = 0;
  this.color = color;
};

Piece.fromIndex = function(index, color){
  
  var cells

  switch (index){
    case 0:// O
      cells = [
        [1, 1],
        [1, 1]
      ];
      break;
    case 1: // J
      cells = [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 2: // L
      cells = [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 3: // Z
      cells = [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 4: // S
      cells = [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ];
      break;
    case 5: // T
      cells = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
      ];
      break;
    case 6: // I
      cells = [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ];
      break;

  }

  var piece = new Piece(cells, color);

  piece.row = 0;
  piece.column = Math.floor((10 - piece.dimension) / 2); // Centralize
  return piece;
};

Piece.prototype.clone = function(){
  
  var _cells = new Array(this.dimension);
  for (var r = 0; r < this.dimension; r++) {
    _cells[r] = new Array(this.dimension);
    for(var c = 0; c < this.dimension; c++){
      _cells[r][c] = this.cells[r][c];
    }
  }

  var piece = new Piece(_cells, this.color);
  piece.row = this.row;
  piece.column = this.column;
  return piece;
};

Piece.prototype.rotate = function(rotations){
  for(var i = 0; i < rotations; i++) {
    var _cells = new Array(this.dimension);
    for (var r = 0; r < this.dimension; r++) {
      _cells[r] = new Array(this.dimension);
    }

    switch (this.dimension) { // Assumed square matrix
      case 2:
        _cells[0][0] = this.cells[1][0];
        _cells[0][1] = this.cells[0][0];
        _cells[1][0] = this.cells[1][1];
        _cells[1][1] = this.cells[0][1];
        break;
      case 3:
        _cells[0][0] = this.cells[2][0];
        _cells[0][1] = this.cells[1][0];
        _cells[0][2] = this.cells[0][0];
        _cells[1][0] = this.cells[2][1];
        _cells[1][1] = this.cells[1][1];
        _cells[1][2] = this.cells[0][1];
        _cells[2][0] = this.cells[2][2];
        _cells[2][1] = this.cells[1][2];
        _cells[2][2] = this.cells[0][2];
        break;
      case 4:
        _cells[0][0] = this.cells[3][0];
        _cells[0][1] = this.cells[2][0];
        _cells[0][2] = this.cells[1][0];
        _cells[0][3] = this.cells[0][0];
        _cells[1][3] = this.cells[0][1];
        _cells[2][3] = this.cells[0][2];
        _cells[3][3] = this.cells[0][3];
        _cells[3][2] = this.cells[1][3];
        _cells[3][1] = this.cells[2][3];
        _cells[3][0] = this.cells[3][3];
        _cells[2][0] = this.cells[3][2];
        _cells[1][0] = this.cells[3][1];

        _cells[1][1] = this.cells[2][1];
        _cells[1][2] = this.cells[1][1];
        _cells[2][2] = this.cells[1][2];
        _cells[2][1] = this.cells[2][2];
        break;
    }

    this.cells = _cells;
  }
};

/**
 * Game manager, manages flow and updating of game.
 */

function GameManager(){

  this.gridCanvas = document.getElementById('grid-canvas');

  this.gravityUpdater = new Updater();

  this.gravityUpdater.onUpdate(function(){
    self.applyGravity();
    self.actuate();
  });

  var self = this;
  this.setup();
  this.startAI();
  this.gravityUpdater.checkUpdate(Date.now());
};

GameManager.prototype.setup = function(){

  this.baseColumns = 8;

  this.pieceWidth = window.innerWidth / this.baseColumns;
  this.pieceHeight = this.pieceWidth;

  this.displacementWidth = Math.floor(this.pieceWidth / 4);
  this.strokeThickness = 20;

  var canvasHeightPieces = Math.ceil(window.innerHeight / this.pieceHeight) + 2;

  this.gridCanvas.width = window.innerWidth;
  this.gridCanvas.height = canvasHeightPieces * this.pieceHeight;

  this.grid = new Grid(canvasHeightPieces, this.baseColumns);
  this.rpg = new RandomPieceGenerator();
  this.ai = new AI(0.510066, 0.760666, 0.35663, 0.184483);
  
  this.workingPieces = [this.rpg.nextPiece(), this.rpg.nextPiece()];
  this.workingPiece = this.workingPieces[0];

  this.isOver = true;

  this.stopAI();
  this.actuate();
};

GameManager.prototype.actuate = function(){
  
  var _grid = this.grid.clone();
  
  if (this.workingPiece != null) {
    _grid.addPiece(this.workingPiece);
  }

  var context = this.gridCanvas.getContext('2d');
  context.save();
  
  context.clearRect(0, 0, this.gridCanvas.width, this.gridCanvas.height);
  
  for(var r = 2; r < _grid.rows; r++){
    
    for(var c = 0; c < _grid.columns; c++){
      
      if (_grid.cells[r][c] != 0){

        context.fillStyle = _grid.cells[r][c];
        context.strokeStyle = _grid.cells[r][c];
        context.fillRect(this.pieceWidth * c, this.pieceHeight * r, this.pieceWidth, this.pieceHeight);

        // Border?
        context.fillStyle = "rgba(255, 255, 255, 0.3)";
        context.fillRect(this.pieceWidth * c + this.displacementWidth, this.pieceHeight * r + this.displacementWidth, this.pieceWidth / 2, this.strokeThickness);
        context.fillRect(this.pieceWidth * c + this.displacementWidth, this.pieceHeight * r + this.displacementWidth + this.strokeThickness, this.strokeThickness, this.pieceWidth / 2 - this.strokeThickness );
      }
    }
  }

  context.restore();
};

GameManager.prototype.startAI = function(){
  this.aiActive = true;
};

GameManager.prototype.stopAI = function(){
  this.aiActive = false;
};

GameManager.prototype.setWorkingPiece = function(){

  this.grid.addPiece(this.workingPiece);
  this.grid.clearLines();

  if (!this.grid.exceeded()){
    
    for(var i = 0; i < this.workingPieces.length - 1; i++){
      this.workingPieces[i] = this.workingPieces[i + 1];
    }

    this.workingPieces[this.workingPieces.length - 1] = this.rpg.nextPiece();
    this.workingPiece = this.workingPieces[0];

    if (this.aiActive) {
      this.aiMove();
    }
  }

  // TODO: NO WAYYYY
  else{

  }
};

GameManager.prototype.applyGravity = function(){
  
  if (this.grid.canMoveDown(this.workingPiece)) {
    this.workingPiece.row++;
  }else{
    this.setWorkingPiece();
  }

};

GameManager.prototype.drop = function(){
  while(this.grid.canMoveDown(this.workingPiece)){
    this.workingPiece.row++;
  }
};

GameManager.prototype.moveLeft = function(){
  if (this.grid.canMoveLeft(this.workingPiece)){
    this.workingPiece.column--;
  }
};

GameManager.prototype.moveRight = function(){
  if (this.grid.canMoveRight(this.workingPiece)){
    this.workingPiece.column++;
  }
};

GameManager.prototype.rotate = function(){
  var offset = this.grid.rotateOffset(this.workingPiece);
  if (offset != null){
    this.workingPiece.rotate(1);
    this.workingPiece.row += offset.rowOffset;
    this.workingPiece.column += offset.columnOffset;
  }
};

GameManager.prototype.aiMove = function(){
  this.workingPiece = this.ai.best(this.grid, this.workingPieces, 0).piece;
};

function RandomPieceGenerator(){
  Math.seed
  this.bag = [0, 1, 2, 3, 4, 5, 6];
  this.shuffleBag();
  this.index = -1;

  this.colorManager = new ColorManager();
};

RandomPieceGenerator.prototype.nextPiece = function(){
  
  this.index++;
  if (this.index >= this.bag.length){
    this.shuffleBag();
    this.index = 0;
  }

  var color = this.colorManager.getColor();

  return Piece.fromIndex(this.bag[this.index], color);

};

RandomPieceGenerator.prototype.shuffleBag = function() {
  var currentIndex = this.bag.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this.bag[currentIndex];
    this.bag[currentIndex] = this.bag[randomIndex];
    this.bag[randomIndex] = temporaryValue;
  }
};
function AI(heightWeight, linesWeight, holesWeight, bumpinessWeight){
  
  this.heightWeight = heightWeight;
  this.linesWeight = linesWeight;
  this.holesWeight = holesWeight;
  this.bumpinessWeight = bumpinessWeight;

};

AI.prototype.best = function(grid, workingPieces, workingPieceIndex){
  
  var best = null;
  var bestScore = null;
  var workingPiece = workingPieces[workingPieceIndex];

  for(var rotation = 0; rotation < 4; rotation++){
    var _piece = workingPiece.clone();
    _piece.rotate(rotation);

    while(grid.canMoveLeft(_piece)){
      _piece.column --;
    }

    while(grid.valid(_piece)){
      var _pieceSet = _piece.clone();
      while(grid.canMoveDown(_pieceSet)){
        _pieceSet.row++;
      }

      var _grid = grid.clone();
      _grid.addPiece(_pieceSet);

      var score = null;
      if (workingPieceIndex == (workingPieces.length - 1)) {
        score = -this.heightWeight * _grid.aggregateHeight() + this.linesWeight * _grid.lines() - this.holesWeight * _grid.holes() - this.bumpinessWeight * _grid.bumpiness();
      }else{
        score = this.best(_grid, workingPieces, workingPieceIndex + 1).score;
      }

      if (score > bestScore || bestScore == null){
        bestScore = score;
        best = _piece.clone();
      }

      _piece.column++;
    }
  }

  return {piece:best, score:bestScore};
};
/**
 * Updater, controls time and speed.
 */

function Updater() {
  this.lastUpdateTime = Date.now();
  this.deltaThreshold = 250; // MS before each update
  this.updateCallback = null;

  window.requestAnimFrame = (function() {
    // Polyfill
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      }
    );
  })();
}

Updater.prototype.onUpdate = function(callback) {
  this.updateCallback = callback;
};

Updater.prototype.doUpdate = function(timestamp) {
  if (this.updateCallback != null) {
    this.updateCallback();
  }

  this.lastUpdateTime = timestamp;
};

Updater.prototype.checkUpdate = function(timestamp) {
  var self = this;
  var delta = timestamp - this.lastUpdateTime;

  if (delta > this.deltaThreshold) {
    this.doUpdate(timestamp);
  }

  window.requestAnimFrame(function() {
    self.checkUpdate(Date.now());
  });
};
