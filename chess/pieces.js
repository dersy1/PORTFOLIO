class Piece {
  constructor(color, image, initialPlacement) {
    this.color = color;
    this.image = image;
    this.initialPlacement = initialPlacement;
    this.placement = [];
    this.isEaten = false;
  }

  moveTo(newPlacement) {
    this.placement = newPlacement;
  }
}

const whiteKing = new Piece("white", "♛", "A1");
const whiteQueen = new Piece("white", "♚", "B1");
const whiteTower1 = new Piece("white", "♜", "C1");
const whiteTower2 = new Piece("white", "♜", "D1");
const whiteBishop1 = new Piece("white", "♝", "E1");
const whiteBishop2 = new Piece("white", "♝", "F1");
const whiteHorse1 = new Piece("white", "♞", "G1");
const whiteHorse2 = new Piece("white", "♞", "H1");
const whitePawn1 = new Piece("white", "♟", "A2");
const whitePawn2 = new Piece("white", "♟", "B2");
const whitePawn3 = new Piece("white", "♟", "C2");
const whitePawn4 = new Piece("white", "♟", "D2");
const whitePawn5 = new Piece("white", "♟", "E2");
const whitePawn6 = new Piece("white", "♟", "F2");
const whitePawn7 = new Piece("white", "♟", "G2");
const whitePawn8 = new Piece("white", "♟", "H2");

const whitePieces = [
  whiteKing,
  whiteQueen,
  whiteTower1,
  whiteTower2,
  whiteBishop1,
  whiteBishop2,
  whiteHorse1,
  whiteHorse2,
  whitePawn1,
  whitePawn2,
  whitePawn3,
  whitePawn4,
  whitePawn5,
  whitePawn6,
  whitePawn7,
  whitePawn8
];

const blackKing = new Piece("black", "♕", "A8");
const blackQueen = new Piece("black", "♔", "B8");
const blackTower1 = new Piece("black", "♖", "C8");
const blackTower2 = new Piece("black", "♖", "D8");
const blackBishop1 = new Piece("black", "♗", "E8");
const blackBishop2 = new Piece("black", "♗", "F8");
const blackHorse1 = new Piece("black", "♘", "G8");
const blackHorse2 = new Piece("black", "♘", "H8");
const blackPawn1 = new Piece("black", "♙", "A7");
const blackPawn2 = new Piece("black", "♙", "B7");
const blackPawn3 = new Piece("black", "♙", "C7");
const blackPawn4 = new Piece("black", "♙", "D7");
const blackPawn5 = new Piece("black", "♙", "E7");
const blackPawn6 = new Piece("black", "♙", "F7");
const blackPawn7 = new Piece("black", "♙", "G7");
const blackPawn8 = new Piece("black", "♙", "H7");

const blackPieces = [
  blackKing,
  blackQueen,
  blackTower1,
  blackTower2,
  blackBishop1,
  blackBishop2,
  blackHorse1,
  blackHorse2,
  blackPawn1,
  blackPawn2,
  blackPawn3,
  blackPawn4,
  blackPawn5,
  blackPawn6,
  blackPawn7,
  blackPawn8
];
