class SnakeGame {
    constructor() {
        this.xSize = pinthing.size.width
        this.ySize = pinthing.size.length
        //The head and body should probably end up as of a snake class or subclass
        this.head = {
            position: {x: 1, y: 1},
            direction: {x: 1, y: 0}
        }
        this.body = [this.convertPosition(1,1)]
        this.foundApple = false;
        this.endGame = false;
        this.gameState = this.body[0]
        this.apple = 0n
    }
    //Of these functions, only the last three are really directly tied to the game rather than the snake
    changeDirection(x,y) {
        this.head.direction = {x: x, y: y}
    }
    removeTail() {
        if (!this.foundApple) {
            this.gameState -= this.body[0]
            this.body.shift()
        } else {
            this.foundApple = false;
        }
    }
    moveHead() { //This is one of the two brains of the snake game, along with the clock system
        let newPos = [this.head.position.x + this.head.direction.x, this.head.position.y + this.head.direction.y]
        //Collision and apple conditions below
        if (newPos[0] < 0 || newPos[1] < 0 || newPos[0] >= this.xSize || newPos[1] >= this.ySize) {
            this.endGame = true;
        } else {
            let convNewPos = this.convertPosition(newPos[0],newPos[1])
            if (this.bodyCollision(convNewPos)) {
                this.endGame = true;
            } else {
                this.head.position = {x: newPos[0], y: newPos[1]}
                this.body.push(convNewPos)
                this.gameState += convNewPos
                if (convNewPos == this.apple) {
                    this.foundApple = true
                    if (snakeGame.body.length >= snakeGame.xSize*snakeGame.ySize) {
                        snakeGame.endGame = true
                    } else {
                        this.newApple()
                    }
                    //console.log('found apple')
                    console.log(this.body.length)
                }
            }
        }
    }
    bodyCollision(pos) {
        let collision = false;
        for (let i = 0; i < this.body.length; i++) {
            if (this.body[i] == pos) {
                collision = true;
                break;
            }
        }
        return collision;
    }
    convertPosition(x,y) {
        return (2n**BigInt((y*this.xSize + x)))
    }
    newApple() { //Currently uses a brute force method
        let newApple = 1n
        while (true) {
            newApple = 2n**BigInt(Math.floor(Math.random()*this.xSize*this.ySize))
            if (!this.bodyCollision(newApple)) {break}
            }
        this.gameState -= this.apple
        this.gameState += newApple
        this.apple = newApple
    }
    gameOver() {
        pinthing.up()
        setTimeout(function() {initSnake()}, 1000)
    }
}
function initSnake() {
    var snakeGame = new SnakeGame
    window.snakeGame = snakeGame
    snakeGame.newApple()
    pinthing.set(snakeGame.gameState)
    pinthing.speed = 100
}
initSnake()