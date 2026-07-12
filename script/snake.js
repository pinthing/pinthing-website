class SnakeGame {
    constructor() {
        this.xSize = pinthing.size.width
        this.ySize = pinthing.size.length
        this.timing = {
            defaultSpeed: 500,  //Default animation speed for pinthing
            gameSpeed: 100,     //Animation speed for changes in the pins
            snakeSpeed: 300,    //Speed of the snake's movement
            waitTime: 1000      //Wait time at the end of a game before a new game is generated
        }
        this.apple = 0n         //Apple position
        this.foundApple = false;
        this.nMoves = 0         //Number of clock pulses during the game; could be used in a scoring system
        this.endGame = false;
        this.gameState = this.convertPosition(1,1)  //The overall visual state of the game, encoded as a single bigint
        this.head = { position: {x: 1, y: 1}, direction: {x: 1, y: 0} }
        this.body = [this.convertPosition(1,1)]     //List of all of the positions of the snake's body, including its head and tail
    }
    moveHead() {                            //Controls many of the functions of the snake
        let newPos = [this.head.position.x + this.head.direction.x, this.head.position.y + this.head.direction.y]
        if (newPos[0] < 0 || newPos[1] < 0 || newPos[0] >= this.xSize || newPos[1] >= this.ySize) {
            this.endGame = true;            //Out-of-bounds condition
        } else {
            let convNewPos = this.convertPosition(newPos[0],newPos[1])
            if (this.bodyCollision(convNewPos)) {
                this.endGame = true;        //Collision condition
            } else {
                this.head.position = {x: newPos[0], y: newPos[1]}
                this.body.push(convNewPos)      //Adds the head to the snake's body
                this.gameState += convNewPos    //Adds the head to the game's visual state
                if (convNewPos == this.apple) { //Apple condition
                    this.foundApple = true
                    if (snakeGame.body.length >= snakeGame.xSize*snakeGame.ySize) {
                        snakeGame.endGame = true //End the game if the player has won
                    } else {
                        this.newApple()
                    }
                    //console.log('found apple')
                    //console.log(this.body.length)
                }
            }
        }
    }
    changeDirection(x,y) { this.head.direction = {x: x, y: y} } //Changes the direction that the head moves in
    removeTail() {                          //There are only four needed directions, and any others could cause bugs.
        if (!this.foundApple) {
            this.gameState -= this.body[0]  //Removes the tail from the visual game state
            this.body.shift()               //Removes the tail from the snake's body
        } else {
            this.foundApple = false;        //Waits one clock cycle if an apple was found
        }
    }
    bodyCollision(pos) {    //Checks if a certain position is in the snake's body
        let collision = false;
        for (let i = 0; i < this.body.length; i++) {
            if (this.body[i] == pos) {
                collision = true;
                break;
            }
        }
        return collision;
    }
    convertPosition(x,y) {  //Converts an (x,y) coordinate to the format used in the game's visual state
        return (2n**BigInt((y*this.xSize + x)))
    }
    newApple() {            //Uses a brute-force method to choose a new location for the apple
        let newApple = 1n
        while (true) {
            newApple = 2n**BigInt(Math.floor(Math.random()*this.xSize*this.ySize))
            if (!this.bodyCollision(newApple)) {break}
        }
        this.gameState -= this.apple    //Removes the old apple from the game's visual state
        this.gameState += newApple      //Adds the new apple to the game's visual state
        this.apple = newApple
    }
    snakeClockPulse() {                 //One clock pulse of the snake game
        snakeGame.nMoves += 1
        snakeGame.moveHead()
        if (!snakeGame.endGame) {
            snakeGame.removeTail()
            pinthing.set(snakeGame.gameState)   //Renders the visual game state
        } else { snakeGame.gameOver() }
    }
    gameOver() {        //Triggers regardless of if the game was won (reached maximum length) or lost
        console.log('Final Score: ' + snakeGame.body.length + ' (' + snakeGame.nMoves + ' moves)')
        snakeClockRunning = false;
        window.snakeClockRunning = false;
        clearInterval(snakeClock)           //Stops the snake's movement
        pinthing.up()
        snakeGame.initSnake(1)
        setTimeout(function() {snakeGame.initSnake(2)}, snakeGame.timing.waitTime)
    }
    initSnake(n) {
        if (n == 1) {
            snakeGame = new SnakeGame
            window.snakeGame = snakeGame
            snakeGame.newApple()
        } else {
            pinthing.set(snakeGame.gameState)
            pinthing.speed = snakeGame.timing.gameSpeed
        }
    }
    startGame() {                       //Can enable the game's controls
        if (snakeGameRunning == true) {
            if (snakeClockRunning == false) {
                pinthing.speed = snakeGame.timing.defaultSpeed
                snakeGameRunning = false
                pinthing.up()
            }
        } else {
            stopClock()     //Stops possible interference from the clock running
            scene.getObjectByName('checkmark').visible = false
            snakeGameRunning = true;
            snakeGame.initSnake(1)
            snakeGame.initSnake(2)
        }
        window.snakeGameRunning = snakeGameRunning
    }
    startSnake() {                      //Deals with the movement of the snake
        if (snakeGameRunning == true) {
            if (snakeClockRunning == false) {
                snakeClockRunning = true; //Start snake game clock interval
                window.snakeClock = window.setInterval(snakeGame.snakeClockPulse, snakeGame.timing.snakeSpeed)
            } else {
                snakeClockRunning = false; //End snake game clock interval
                clearInterval(snakeClock)
            }
            window.snakeClockRunning = snakeClockRunning
        }
    }
}
var snakeGameRunning = false;
var snakeClockRunning = false;
var snakeGame = new SnakeGame
window.snakeGameRunning = snakeGameRunning
window.snakeClockRunning = snakeClockRunning
window.snakeGame = snakeGame