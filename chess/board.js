const board=document.getElementById("chessboard");

function generateBoard(){
let white=true;
for (let i = 1; i <= 64; i++) {
      const tile = document.createElement("div");
      determineColorOfTile(white,tile);
      board.appendChild(tile);
      white=!white;
      if(i%8==0){
        white=!white;
     }
  }
}
function determineColorOfTile(white,tile){
        if(white){
            tile.className="whiteTile"
        }else{ tile.className="blackTile"}
    
}

generateBoard();