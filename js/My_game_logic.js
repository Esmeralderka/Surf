/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class my_game_logic extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, y, width, height, updateStateMilliseconds)
    {
        super(updateStateMilliseconds); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = 100;
        this.y = y;
    }

    moveLeft()
    {
      
      if(this.x>=1)
      {
        this.x -=100 ;
      }
    }

    moveRight()
    {
        if(this.x<199)
      {
        this.x +=100 ;
      }
    }
    render()
    {
      var random =Math.floor( Math.random()*3);
      
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }


}  

