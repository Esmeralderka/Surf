/*******************************************************************************************************/
/* This file is the same for every game.                                                               */
/* DO NOT EDIT THIS FILE.                                                                              */
/*                                                                                                     */
/* If you need to modify the methods, then you should create a sub-class that extends from this class. */
/*                                                                                                     */
/*******************************************************************************************************/


/* Author: Derek O Reilly, Dundalk Institute of Technology, Ireland.                                                                                */
/* This is the superclass that gameObjects extend from.                                                                                                 */
/* It holds the data and functionality that is common to all gameObjects.                                                                               */
/* If you want to implement state change in your game, then you MUST overwrite the updateState() method in your sub-class that extends from GameObject. */
/* You MUST overwrite the code inside this if-statement with your own render() code in your sub-class that extends GameObject.                          */
/* This class will usually not change.                                                                                                              */

class GameObject
{
    constructor(updateStateMilliseconds, delay = 0)
    {
        /* These variables are ALWAYS needed */
        this.gameObjectInterval = null; /* set to null when not running */
        this.gameObjectIsDisplayed = false;
        this.updateStateMilliseconds = updateStateMilliseconds; /* change to suit the gameObject state update in milliseconds. Smaller numbers give a faster gameObject update. */
        this.delay = delay; /* delay the start of the updateState() method */
    }

    start()
    {
        if ((this.updateStateMilliseconds !== null) && (this.gameObjectInterval === null))
        {
            setTimeout(startUpdateStateInterval.bind(this), this.delay);
        }
        else if (this.updateStateMilliseconds === null)
        {
            this.gameObjectIsDisplayed = true; // by default, gameObjects that have no updateState() interval should be visible
        }

        function startUpdateStateInterval() // this function is only ever called from inside the start() method 
        {
            this.gameObjectInterval = setInterval(this.updateState.bind(this), this.updateStateMilliseconds);
            this.gameObjectIsDisplayed = true;
        }
    }

    stop()
    {
        if (this.gameObjectInterval !== null)
        {
            clearInterval(this.gameObjectInterval);
            this.gameObjectInterval = null; /* set to null when not running */
        }
        this.gameObjectIsDisplayed = true;
    }

    stopAndHide()
    {
        this.stop();
        this.gameObjectIsDisplayed = false;
    }

    isDisplayed()
    {
        return (this.gameObjectIsDisplayed);
    }

    updateState()
    {
        /* If you need to change state data in your game, then you can overwrite this method in your sub-class. */
        /* If you do not need to change data state, then you do not need to overwrite this method.              */
    }

    render()
    {
        /* If your gameObject renders, then you overwrite this method with your own render() code */
    }
}