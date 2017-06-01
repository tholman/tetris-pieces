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


        // console.log(_grid.cells[r], _grid.cells[r][c]);
        _grid.cells[r][c](context, c, r, this.pieceWidth, this.pieceHeight);
        
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

    // I piece
    if( this.workingPiece.cells.length > 3) {

      if( this.workingPiece.cells[0][2] !== 0 ) {
        this.workingPiece.cells[0][2] = 6;
        this.workingPiece.cells[1][2] = 7;
        this.workingPiece.cells[2][2] = 8;
        this.workingPiece.cells[3][2] = 9;
      }
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
