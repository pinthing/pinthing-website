class Quadriblock {
    constructor() {
        this.xSize = BigInt(pinthing.size.width)
        this.blockMaps = {
            i: [
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0],
                    [0, 0, 1, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0],
                    [0, 1, 0, 0]
                ]
            ],
            o: [
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ],
                [
                    [0, 0, 0, 0],
                    [0, 2, 2, 0],
                    [0, 2, 2, 0],
                    [0, 0, 0, 0]
                ]
            ],
            t: [
                [
                    [0, 3, 0],
                    [3, 3, 3],
                    [0, 0, 0]
                ],
                [
                    [0, 3, 0],
                    [0, 3, 3],
                    [0, 3, 0]
                ],
                [
                    [0, 0, 0],
                    [3, 3, 3],
                    [0, 3, 0]
                ],
                [
                    [0, 3, 0],
                    [3, 3, 0],
                    [0, 3, 0]
                ]
            ],
            s: [
                [
                    [0, 4, 4],
                    [4, 4, 0],
                    [0, 0, 0]
                ],
                [
                    [0, 4, 0],
                    [0, 4, 4],
                    [0, 0, 4]
                ],
                [
                    [0, 0, 0],
                    [0, 4, 4],
                    [4, 4, 0]
                ],
                [
                    [4, 0, 0],
                    [4, 4, 0],
                    [0, 4, 0]
                ]
            ],
            z: [
                [
                    [5, 5, 0],
                    [0, 5, 5],
                    [0, 0, 0]
                ],
                [
                    [0, 0, 5],
                    [0, 5, 5],
                    [0, 5, 0]
                ],
                [
                    [0, 0, 0],
                    [5, 5, 0],
                    [0, 5, 5]
                ],
                [
                    [0, 5, 0],
                    [5, 5, 0],
                    [5, 0, 0]
                ]
            ],
            j: [
                [
                    [6, 0, 0],
                    [6, 6, 6],
                    [0, 0, 0]
                ],
                [
                    [0, 6, 6],
                    [0, 6, 0],
                    [0, 6, 0]
                ],
                [
                    [0, 0, 0],
                    [6, 6, 6],
                    [0, 0, 6]
                ],
                [
                    [0, 6, 0],
                    [0, 6, 0],
                    [6, 6, 0]
                ]
            ],
            l: [
                [
                    [0, 0, 7],
                    [7, 7, 7],
                    [0, 0, 0]
                ],
                [
                    [0, 7, 0],
                    [0, 7, 0],
                    [0, 7, 7]
                ],
                [
                    [0, 0, 0],
                    [7, 7, 7],
                    [7, 0, 0]
                ],
                [
                    [7, 7, 0],
                    [0, 7, 0],
                    [0, 7, 0]
                ]
            ]
        }
        this.rotationChecks = { //u, r, d, l; cl, ccl
            i: [
                [
                    [
                        [0, 0], [-2, 0], [1, 0], [1, 2], [-2, -1]
                    ], [
                        [0, 0], [2, 0], [-1, 0], [-1, 2], [2, -1]
                    ]
                ],[
                    [
                        [0, 0], [-1, 0], [2, 0], [-1, 2], [2, -1]
                    ], [
                        [0, 0], [2, 0], [-1, 0], [2, 1], [-1, -2]
                    ]
                ],[
                    [
                        [0, 0], [2, 0], [-1, 0], [2, 1], [-1, -1]
                    ], [
                        [0, 0], [-2, 0], [1, 0], [-2, 1], [1, -1]
                    ]
                ],[
                    [
                        [0, 0], [-2, 0], [1, 0], [-2, 1], [1, -2]
                    ], [
                        [0, 0], [1, 0], [-2, 0], [1, 2], [-2, -1]
                    ]
                ]
            ],
            o: [
                [
                    [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ], [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ]
                ],[
                    [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ], [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ]
                ],[
                    [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ], [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ]
                ],[
                    [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ], [
                        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]
                    ]
                ]
            ],
            t: [
                [
                    [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ], [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ], [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ], [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ]
                ],[
                    [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ], [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ]
                ]
            ],
            s: [
                [
                    [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ], [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ], [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ], [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ]
                ],[
                    [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ], [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ]
                ]
            ],
            z: [
                [
                    [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ], [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ], [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ], [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ]
                ],[
                    [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ], [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ]
                ]
            ],
            j: [
                [
                    [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ], [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ], [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ], [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ]
                ],[
                    [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ], [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ]
                ]
            ],
            l: [
                [
                    [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ], [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ], [
                        [0, 0], [1, 0], [1, -1], [0, 2], [1, 2]
                    ]
                ],[
                    [
                        [0, 0], [1, 0], [1, 1], [0, -2], [1, -2]
                    ], [
                        [0, 0], [-1, 0], [-1, 1], [0, -2], [-1, -2]
                    ]
                ],[
                    [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ], [
                        [0, 0], [-1, 0], [-1, -1], [0, 2], [-1, 2]
                    ]
                ]
            ],
        }
        this.maxTime = {lockWait: 250, lockDelay: 500, fallRate: 1000, fallDistance: 1}
        this.minTime = {lockWait: 50, lockDelay: 50, fallRate: 200, fallDistance: 20}
        this.timing = {
            lockWait: 250,          //The time after a block locks before a new block spawns
            lockDelay: 500,         //The time after gravity results in a collision until the block locks
            fallRate: 1000,         //Milliseconds per gravity drop
            fallDistance: 1,        //How far down each gravity drop goes
            animationSpeed: 50,     //Pin animation speed in milliseconds
            defaultSpeed: 500       //Normal pin animation speed
        }
        this.blockNames = ['i', 'o', 't', 's', 'z', 'j', 'l']
        this.blockInts = this.newBlockInts()
        this.conditions = { gravity: true, currentBlock: true, locking: false, waiting: false, wasHeld: false }
        this.queue = this.generator()
        this.nBlocks = 0            //The number of blocks that the game has cycled through
        this.score = 0              //The player's score
        this.posX = 2               //Used to give offset from the top left corner when rendering the game
        this.posY = 2
        this.frameSize = {x: 10, y: 20, borderF: 4, borderV: 1} //The sizing for the game, and the thicknesses
        this.gameState = this.blankFrame()                      //for the gameField and (visual) gameState borders.
        this.gameField = this.blankField()
        this.currentBlock = { type: 0, posX: 4, posY: this.frameSize.y + 1, rot: 0}
        this.ghostBlock = { enabled: true, posY: 4, pins: [-1, -1, -1, -1]}
        this.holdBlock = { render: true, posX: 15, posY: 5, type: -1, int: 0n}
        this.showDisplay = true
    }
    newBlockInts() {    //Generates BigInts used when rendering each type of block
        let ints = [[0n,0n,0n,0n], [0n,0n,0n,0n], [0n,0n,0n,0n], [0n,0n,0n,0n], [0n,0n,0n,0n], [0n,0n,0n,0n], [0n,0n,0n,0n]]
        for (let i = 0; i < 7; i++) {
            let arr = this.blockMaps[this.blockNames[i]]
            for (let j = 0; j < 4; j++) {
                let i3 = 1n
                let entry = 0n
                for (let i1 = 0; i1 < arr[j].length; i1++) {
                    for (let i2 = 0; i2 < arr[j].length; i2++) {
                        entry += BigInt(arr[j][i1][i2]/(i+1))*i3;
                        i3 = i3 * 2n
                    }
                    i3 = 2n**(this.xSize*BigInt(i1+1))
                }
                ints[i][j] = entry
            }
        }
        return ints

    }
  blankField() {    //Generates a blank border for the gameField used for collision checks
        let arr = []
        for (let i = 0; i < this.frameSize.y + 2*this.frameSize.borderF; i++) {
            arr.push(new Array(this.frameSize.x + 2*this.frameSize.borderF))    //Makes a blank array
        }
        for (let i = 0; i < this.frameSize.borderF; i++) {
            arr[i].fill(8)
            arr[this.frameSize.y + 2*this.frameSize.borderF - 1 - i].fill(8)    //Fills in the top and bottom with a border
        }
        for (let i = this.frameSize.borderF; i < this.frameSize.y+this.frameSize.borderF; i++) {
            for (let j = 0; j < this.frameSize.borderF; j++) {
                arr[i][j] = 8
                arr[i][this.frameSize.x + 2*this.frameSize.borderF - 1 - j] = 8 //Fills in the left and right with a border
            }
            arr[i].fill(0, this.frameSize.borderF, this.frameSize.x + this.frameSize.borderF)   //Fills in the middle
        }
        return arr
    }
    blankFrame() {  //Generates the BigInt representing a blank visual frame
        let frame = 0n
        let fSize = BigInt(this.frameSize.x + 2*this.frameSize.borderV)
        for (let i = 0; i < this.frameSize.borderV; i++) {
            frame += (2n**fSize - 1n) * 2n**(BigInt(i)*this.xSize)  //Top and bottom
            frame += (2n**fSize - 1n) * (2n**(BigInt(this.frameSize.y+this.frameSize.borderV + i)*this.xSize))
        }
        for (let i = this.frameSize.borderV; i < this.frameSize.borderV + this.frameSize.y; i++) {
            frame += (2n**BigInt(this.frameSize.borderV) - 1n) * 2n**(this.xSize*BigInt(i))     //Left and right
            frame += (2n**BigInt(this.frameSize.borderV) - 1n) * 2n**(this.xSize*BigInt(i) + BigInt(this.frameSize.x + this.frameSize.borderV))
        }
        return frame
    }
    blankHold() {   //Generates the BigInt for a blank hold box on the right side of the game
        let box = 0n
        box += (2n**8n-1n)*(2n**(7n*this.xSize)+1n)*2n**(this.xSize*BigInt(this.holdBlock.posY) + BigInt(this.holdBlock.posX))
        for (let i = 1; i < 7; i++) {
            box += 2n**(this.xSize*BigInt(i+this.holdBlock.posY) + BigInt(this.holdBlock.posX))*(1n+2n**7n)
        }
        return box
    }
    generator() {   //Generates a random queue of blocks
        let bag = [0, 1, 2, 3, 4, 5, 6]
        let ans = []
        let r = 0
        for (let i = 0; i < 7; i++) {
            r = Math.floor(Math.random()*(7-i))
            ans.push(bag[r])
            bag.splice(r, 1)
        }
        return ans
    }
    blockCycle() {  //Controls the generation of new blocks
        this.blockSpawn(this.queue.shift())
        this.nBlocks += 1
        if (this.queue.length == 0) {
            this.queue = this.generator()
        }
        if (window.quadriblockGameRunning) {quadriblock.render()}
        this.difficulty()
    }
    startGame() {   //Starts and stops the game. Once running, the gravityClock is the heart of the game.
        if (window.quadriblockGameRunning) {
            pinthing.up()
            window.quadriblockGameRunning = false
            pinthing.speed = this.timing.defaultSpeed
            clearInterval(gravityClock)
            if (this.showDisplay) {this.consoleDisplay(2)}
            quadriblock = new Quadriblock   //Resets the game when it is closed
            window.quadriblock = quadriblock
        } else {
            stopClock()     //Stops possible interference from the pinthing clock running
            scene.getObjectByName('checkmark').visible = false
            window.quadriblockGameRunning = true
            pinthing.speed = this.timing.animationSpeed
            if (this.holdBlock.render) {this.holdBlock.int = this.blankHold()}
            this.blockCycle()
            window.gravityClock = window.setInterval(function() {
                if (!quadriblock.conditions.waiting) { quadriblock.gravity() }
            }, quadriblock.timing.fallRate)
            if (this.showDisplay) {this.consoleDisplay()}
        }
    }
    clearRows() {   //Triggers whenever a block lands and locks, and can clear rows and increase score
        let clear = []
        let clearY = 0
        let filled = true
        let g = 0n
        let n = 0n
        for (let i = 0; i < this.blockMap().length; i++) {
            filled = true
            clearY = this.fieldY(this.currentBlock.posY) + i    //Check if any lines need to be cleared
            if (this.fieldY(clearY) > 0) {
                for (let j = this.frameSize.borderF; j < this.frameSize.x + this.frameSize.borderF; j++) {
                    if (this.gameField[clearY][j] == 0 || this.gameField[clearY][j] == 8) {
                        filled = false
                        break
                    }
                }
                if (filled) { clear.push(clearY) }
            }
        }
        //if (clear.length == 4) {console.log('Tet... Quadriblock!')}
        if (clear.length == 1) {this.score += 1}
        if (clear.length == 2) {this.score += 4}    //It is better to clear more rows at once for a higher score
        if (clear.length == 3) {this.score += 8}
        if (clear.length == 4) {this.score += 16}
        for (let i = 0; i < clear.length; i++) {
            clearY = BigInt(clear[i] - this.frameSize.borderF + this.frameSize.borderV)
            //console.log('Clear Row ' + (this.fieldY(clear[i])) + '!')
            g = (this.gameState - this.blankFrame()) & ( 2n**(this.xSize*BigInt(this.frameSize.y+2*this.frameSize.borderV))-1n - (2n**this.xSize-1n)*(2n**(this.xSize*clearY)) )
            n = 2n**(this.xSize*(clearY + 1n))  // 'g' is a version of the visual gameState with the filled row missing
            this.gameState = (((g / n) * n) ^ g) * (2n**this.xSize) + (g / n) * n + quadriblock.blankFrame()
            this.gameField.splice(clear[i], 1)  //The above line takes the top part alone of 'g', lowers it by a row, and adds the lower part and blank frame.
            this.gameField.splice(this.frameSize.borderF, 0, new Array(this.frameSize.x + 2*this.frameSize.borderF))
            for (let j = 0; j < this.frameSize.borderF; j++) {      //This splices out the filled row, splices in a new row near the top,
                this.gameField[this.frameSize.borderF][j] = 8       //and fills in that new row.
                this.gameField[this.frameSize.borderF][this.frameSize.x + 2*this.frameSize.borderF - j - 1] = 8
            }
            this.gameField[this.frameSize.borderF].fill(0, this.frameSize.borderF, this.frameSize.x + this.frameSize.borderF)
        }
    }
    gravity() {     //The heart of the game
        var gcollision = false
        for (let i = 0; i < this.timing.fallDistance; i++) {
            gcollision = this.blockTranslate(1) //Attempts to move the current block downwards, and checks for a collision
            if (gcollision) { break }
            if (!gcollision && this.conditions.locking) {
                this.conditions.locking = false
                clearTimeout(lockTimer)
            }
        }
        quadriblock.render()
        if (gcollision) {
            if (!this.conditions.locking) {     //Deals with the collision, if one occurs
                this.conditions.locking = true
                window.lockTimer = window.setTimeout(function() {
                    quadriblock.blockLock()
                }, quadriblock.timing.lockDelay)
            }
        }
    }
    fieldY(y) {
        return this.frameSize.y - y + this.frameSize.borderF
    }   //Converts a coordinate system with (0, 0) in the bottom left of the game into the one used for collision detection with gameField
    fieldX(x) {
        return x - 1 + this.frameSize.borderF
    }
    fieldSet(arr, n) {      //Sets the part of the gameField overlapping with a map to a certain value
        let ar = arr
        if (arr === 1) {
            ar = [this.fieldY(this.currentBlock.posY), this.fieldX(this.currentBlock.posX), this.blockMap()]
        }
        let map = ar[2]
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (map[i][j] != 0) {
                    this.gameField[ar[0] + i][ar[1] + j] = n
                }
            }
        }
    }
    fieldToState() {
        var state = this.blankFrame()
        var b = this.frameSize.borderV - this.frameSize.borderF
        for (let i = this.frameSize.borderF; i < this.frameSize.y + this.frameSize.borderF; i++) {
            for (let j = this.frameSize.borderF; j < this.frameSize.x + this.frameSize.borderF; j++) {
                if (this.gameField[i][j] != 0) {
                    state += (2n**BigInt(b + j + Number(this.xSize)*(b+i)))
                }
            }
        }
        return state
    }
    blockInt(x, y) {            //Returns the BigInt representing the current block's visual state
        return BigInt(this.blockInts[this.currentBlock.type][this.currentBlock.rot]) *
        (2n**BigInt(this.frameSize.borderV + x-1 + Number(this.xSize)*(this.frameSize.borderV+this.frameSize.y-y)))
    }
    blockMap() {                //Returns the current block's 'map'. Used in collision detection.
        return this.blockMaps[this.blockNames[this.currentBlock.type]][this.currentBlock.rot]
    }
    blockCollision(map, pos) {  //Checks if a given map is in an empty part of the gameField
        let collision = false;
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if (this.gameField[pos[0] + i][pos[1] + j] != 0 && map[i][j] != 0) {
                    collision = true;
                    break;
                }
            }
            if (collision == true) {break}
        }
        return collision
    }
    blockLock() {               //Locks the current block into place on the gameField, and calls on blockCycle
        let gcollision = this.blockCollision(this.blockMap(), [this.fieldY(this.currentBlock.posY - 1), this.fieldX(this.currentBlock.posX)])
        if (gcollision) {
            this.conditions.waiting = true
            this.conditions.currentBlock = false
            this.conditions.locking = false
            window.lockWait = window.setTimeout(function() {    //This function ended up needing to adjust a lot of conditions
                quadriblock.conditions.waiting = false
                quadriblock.conditions.currentBlock = true
                quadriblock.conditions.wasHeld = false
                quadriblock.blockCycle()
            }, this.timing.lockWait)
            this.fieldSet(1, this.currentBlock.type + 1)
            this.clearRows()
            this.gameState = this.fieldToState()
        } else {    //If the block was moved out of position without the locking process being cancelled, cancels it now
            this.conditions.locking = false
        }
    }
    blockSpawn(blockType) {     //Brings a new block of a certain type into position at the top of the game
        let newY =  this.frameSize.y + [1,1,0,0,0,0,0][blockType]
        this.currentBlock.type = blockType
        this.currentBlock.posX = 4
        this.currentBlock.posY = newY
        this.currentBlock.rot = 0
        if (this.blockCollision(this.blockMap(), [this.fieldY(newY), this.fieldX(4)])) {
            console.log('Game Over!')   //If a new block can't be spawned, the player has lost.
            console.log('Score: ' + this.score)
            clearInterval(gravityClock)
            quadriblock.startGame()     //Ends and resets the game
        } else {
            this.gameState += this.blockInt(4, newY)
        }
    }
    blockTranslate(direction) { // 0 -> up, 1 -> down, 2 -> left, 3 -> right, else -> error
        let tcollision = false  //Moves the current block in a given direction
        let newX = this.currentBlock.posX + [0, 0, -1, 1][direction]
        let newY = this.currentBlock.posY + [1, -1, 0, 0][direction]
        tcollision = this.blockCollision(this.blockMap(), [this.fieldY(newY), this.fieldX(newX)])
        if (!tcollision) {
            this.gameState -= this.blockInt(this.currentBlock.posX, this.currentBlock.posY)
            this.currentBlock.posX = newX
            this.currentBlock.posY = newY
            this.gameState += this.blockInt(this.currentBlock.posX, this.currentBlock.posY)
            if (this.conditions.locking) {
                clearTimeout(lockTimer)
                window.lockTimer = window.setTimeout(function() {
                    quadriblock.blockLock()
                }, quadriblock.timing.lockDelay)
            }
        }
        return tcollision;
    }
    blockRotate(direction) {    //0 = clockwise, 1 = cclw
        let rcollision = true   //Rotates the current block in a given direction, and uses a series of possible positions for kicks off obstacles
        let checks = this.rotationChecks[this.blockNames[this.currentBlock.type]][this.currentBlock.rot][direction]
        let newX = 0
        let newY = 0
        let newRot = [3, 0, 1, 2, 3, 0][this.currentBlock.rot + [2, 0][direction]]
        for (let i = 0; i < 5; i++) {
            newX = checks[i][0] + this.currentBlock.posX
            newY = checks[i][1] + this.currentBlock.posY
            if (!(this.blockCollision(this.blockMaps[this.blockNames[this.currentBlock.type]][newRot], [this.fieldY(newY), this.fieldX(newX)]))) {
                rcollision = false
                break;
            }
        }
        if (!rcollision) {  //Triggers upon successful rotation
            this.gameState -= this.blockInt(this.currentBlock.posX, this.currentBlock.posY)
            this.currentBlock.rot = newRot
            this.currentBlock.posX = newX
            this.currentBlock.posY = newY
            this.gameState += this.blockInt(this.currentBlock.posX, this.currentBlock.posY)
            if (this.conditions.locking) {  //Incidentally, o blocks can act like a pause button
                clearTimeout(lockTimer)
                window.lockTimer = window.setTimeout(function() { quadriblock.blockLock() }, quadriblock.timing.lockDelay)
            }
        }
        return rcollision;
    }
    hold() {    //Temporarily stores a block off to the side
        if (this.conditions.wasHeld == false) {
            var oldType = this.holdBlock.type
            this.holdBlock.type = this.currentBlock.type    //Move the current block to hold
            this.holdBlock.int = this.blankHold()
            this.gameState -= this.blockInt(this.currentBlock.posX, this.currentBlock.posY)
            this.currentBlock.rot = 0
            this.holdBlock.int += this.blockInt(this.holdBlock.posX-this.frameSize.borderV+3,this.frameSize.borderV+this.frameSize.y-this.holdBlock.posY-2)
            if (oldType == -1) {
                this.blockCycle()       //Generate a new block, or bring out the one in hold
            } else {
                this.blockSpawn(oldType)
            }
            this.conditions.wasHeld = true
        }
    }
    softdrop() {    //Effectively speeds up gravity
        this.blockTranslate(1)
        this.render()
    }
    harddrop() {    //Completely drops and immediately locks the current block into place, where the ghost block would have been
        var newY = this.ghostPosY()
        this.gameState -= this.blockInt(this.currentBlock.posX, this.currentBlock.posY)
        this.currentBlock.posY = newY
        this.gameState += this.blockInt(this.currentBlock.posX, this.currentBlock.posY)
        this.blockLock()
    }
    difficulty() {  //speeds up gravity, reduces wait times, etc, as nBlocks increases.
        var difFactor = ( 1 - Math.floor(this.nBlocks / 64) / 10 )
        this.timing.fallRate = this.maxTime.fallRate * difFactor
        this.timing.lockWait = this.maxTime.lockWait * difFactor
        this.timing.lockDelay = this.maxTime.lockDelay * difFactor
        this.timing.fallRate = Math.max(this.minTime.fallRate, this.timing.fallRate)
        this.timing.lockWait = Math.max(this.minTime.lockWait, this.timing.lockWait)
        this.timing.lockDelay = Math.max(this.minTime.lockDelay, this.timing.lockDelay)
        this.timing.fallDistance = this.maxTime.fallDistance + Math.floor(this.nBlocks / 128)   //Good luck getting to 20 gravity
        this.timing.fallDistance = Math.min(this.minTime.fallDistance, this.timing.fallDistance)
    }
    ghostPosY() {   //Determines the y-coordinate of the ghost block; other values are the same as for the current block.
        var ghostY = this.currentBlock.posY
        while (true) {
            if (this.blockCollision(this.blockMap(), [this.fieldY(ghostY), this.fieldX(this.currentBlock.posX)])) {
                break;
            } else {
                ghostY -= 1
            }
        }
        return ghostY + 1
    }
    ghostBlockPos() {   //Determines the four pins currently occupied by the ghost block. Checks for overlap with the current block.
        var ghostY = this.ghostPosY()
        var map = this.blockMap()
        var b = this.frameSize.borderV - this.frameSize.borderF
        var currentPins = [0, 0, 0, 0]
        var pin = 0
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map.length; j++) {
                if (map[i][j] != 0) {
                    this.ghostBlock.pins[pin] = Number(this.xSize)*(i+b+this.fieldY(ghostY)) + j+b+this.fieldX(this.currentBlock.posX)
                    currentPins[pin] = Number(this.xSize)*(i+b+this.fieldY(this.currentBlock.posY)) + j+b+this.fieldX(this.currentBlock.posX)
                    pin += 1
                }
            }
        }
        for (let i = 0; i < 4; i++) {   //If there is overlap between the current and ghost blocks, the overlapping current pins take precedence
            for (let j = 0; j < 4; j++) {
                if (this.ghostBlock.pins[i] == currentPins[j]) {
                    this.ghostBlock.pins[i] = -1
                }
            }
        }
    }
    render() {      //Uses the gameState, ghost pins, and hold int to render everything in the game.
        if (this.ghostBlock.enabled == true) {
            let gameArray = pinthing.number2Array(
                (this.gameState + this.holdBlock.int)*2n**(this.xSize*BigInt(this.posY)+BigInt(this.posX)),
                pinthing.size.width * pinthing.size.length).reverse()
            if (this.conditions.currentBlock) {
                this.ghostBlockPos()
                for (let i = 0; i < this.ghostBlock.pins.length; i++) {
                    if (this.ghostBlock.pins[i] != -1) {
                        gameArray[this.ghostBlock.pins[i] + this.posX + this.posY*Number(this.xSize)] = 2
                    }
                }
            }
            pinthing.set(gameArray.reverse())
        } else {
            pinthing.set(this.gameState + this.holdBlock.int)
            this.ghostBlockSet()
        }
    }
    consoleDisplay(n = 1) { //Useful for playing the game
        if (n == 0) {
            //Add more copies of console.log(' ') as necessary
            console.log('---- Current score: ' + this.score + ' ----')
            console.log('---- Current nBlocks: ' + this.nBlocks + ' ----')
            console.log(' ')
            console.log('Lock Wait: ' + this.timing.lockWait + ', Lock Delay: ' + this.timing.lockDelay)
            console.log('Fall Rate: ' + this.timing.fallRate + ', Fall Distance: ' + this.timing.fallDistance)
            console.log('---- ---- ---- ---- ---- ---- ---- ----')
        } else if (n == 1) {
            window.quadriblockDisplay = window.setInterval(function() {quadriblock.consoleDisplay(0)}, 100)
        } else {
            clearInterval(quadriblockDisplay)
        }
    }
}
var quadriblockGameRunning = false;
var quadriblock = new Quadriblock
window.quadriblockGameRunning = quadriblockGameRunning
window.quadriblock = quadriblock