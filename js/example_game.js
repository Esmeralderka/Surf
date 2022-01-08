/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.             */
/* There should always be a javaScript file with the same name as the html file. */
/* This file always holds the playGame function().                               */
/* It also holds game specific code, which will be different for each game       */





/******************** Declare game specific global data and functions *****************/
/* images must be declared as global, so that they will load before the game starts  */

let background = new Image();
background.src = "images/sea2.png";

let userImage = new Image();
userImage.src = "images/surfer.png";

let blockImage = new Image();
blockImage.src = "images/shark.png";


const BACKGROUND = 0;
const USER = 1;
const BLOCK = 2;

/*
let skyImage = new Image();
skyImage.src = "images/wave3.png";
let middleImage = new Image();
middleImage.src = "images/wave2.png";
let foregroundImage = new Image();
foregroundImage.src = "images/wave1.png";
*/



/******************* END OF Declare game specific data and functions *****************/


/* Always have a playGame() function                                     */
/* However, the content of this function will be different for each game */
function playGame()
{
    /* We need to initialise the game objects outside of the Game class */
    /* This function does this initialisation.                          */
    /* Specifically, this function will:                                */
    /* 1. initialise the canvas and associated variables                */
    /* 2. create the various game gameObjects,                   */
    /* 3. store the gameObjects in an array                      */
    /* 4. create a new Game to display the gameObjects           */
    /* 5. start the Game                                                */

  


    /* Create the various gameObjects for this game. */
    /* This is game specific code. It will be different for each game, as each game will have it own gameObjects */
  
    
    gameObjects[BACKGROUND] = new ScrollingBackgroundImage(background, 1);
    var random =Math.floor( Math.random()*3);
    gameObjects[BLOCK] = new Shark(blockImage, random*100, 100, 100, 100,100);

    gameObjects[USER] = new my_game_logic (userImage, 400, 100, 100, 0);

    /* END OF game specific code. */


    /* Always create a game that uses the gameObject array */
    let game = new CanvasGame();

    /* Always play the game */
    game.start();

    /* If they are needed, then include any game-specific mouse and keyboard listners */

   document.addEventListener("keydown", event=>
   {
       let check;
       var pressedKeys = {};
            window.onkeydown = function(e)
             { 
                if ( pressedKeys[e.keyCode] = true )
                {
                    if(e.keyCode=="37")
                    {
                        userImage.src = "images/surfer_left.png";
                        gameObjects[USER].moveLeft();
                        setTimeout(() => { userImage.src = "images/surfer.png"; }, 500)
                    }
                    if(e.keyCode=="39")
                    {
                        userImage.src = "images/surfer_right.png";
                        gameObjects[USER].moveRight();
                        setTimeout(() => { userImage.src = "images/surfer.png"; }, 500)
                    }
                }
             }
   });


}