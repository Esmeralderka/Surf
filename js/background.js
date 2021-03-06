
/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland. */

class ScrollingBackgroundImage extends GameObject
{
    /* Each gameObject MUST have a constructor() and a render() method.        */
    /* If the object animates, then it must also have an updateState() method. */

    constructor(image, updateStateMilliseconds)
    {
        super(updateStateMilliseconds); /* as this class extends from GameObject, you must always call super() */

        /* These variables depend on the object */
        this.image = image;//1234567890 test

        this.x = 0;
    }

    updateState()
    {     
        this.x--;
        if (this.x <= -canvas.width)
        {
            this.x = 0;
        }
        ctx.drawImage(this.image, this.x, 0, canvas.width, canvas.height);
    }

    render()
    {
        ctx.drawImage(this.image, this.x, 0, canvas.width, canvas.height);
        ctx.drawImage(this.image, this.x + canvas.width, 0, canvas.width, canvas.height);
    }
}