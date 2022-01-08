/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class Shark extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, x, width, height, updateStateMilliseconds, delay = 0)
    {
        super(updateStateMilliseconds, delay); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.sharkImage = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = 1;

        this.NUMBER_OF_SPRITES = 96; // the number of gameObjects in the gameObject image
        this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE = 12; // the number of columns in the gameObject image
        this.NUMBER_OF_ROWS_IN_SPRITE_IMAGE = 8; // the number of rows in the gameObject image
        this.currentgameObject = 0;

        this.START_ROW = 0;
        this.START_COLUMN = 0;
        this.row = this.START_ROW;
        this.column = this.START_COLUMN;
    }

    updateState()
    {
      
        this.y=this.y+10;
        if (this.y > canvas.height)
        {
            this.y = -this.height;
        }

        this.currentgameObject++;
        if (this.currentgameObject == 3)
        {
            this.column = this.START_COLUMN;
            this.row = this.START_ROW;
            this.currentgameObject = 0;
        }
        else
        {
            this.column++;
            if (this.column === this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE)
            {
                this.column = 0;
                this.row++;
            }
        }  
      //  this.x=1;
    }

    render()
    {
        let SPRITE_WIDTH = ((this.sharkImage.width ) / this.NUMBER_OF_COLUMNS_IN_SPRITE_IMAGE); // the -5 is an adjustment so that this gameObject works
        let SPRITE_HEIGHT = (this.sharkImage.height / this.NUMBER_OF_ROWS_IN_SPRITE_IMAGE);
        console.log(this.x);
        ctx.drawImage(this.sharkImage, this.column * SPRITE_WIDTH, this.row * SPRITE_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, this.width, this.height);
    }
}