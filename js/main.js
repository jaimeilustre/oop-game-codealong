class Player {
    constructor() {
        // initialize properties
        this.positionX = 50;
        this.positionY = 0;
        this.height = 10;
        this.width = 20;

        // dom manipulation
        this.playerElm = document.getElementById("player");
        this.playerElm.style.width = this.width + "vw";
        this.playerElm.style.height = this.height + "vh";
        this.playerElm.style.left= this.positionX + "vw";
        this.playerElm.style.bottom = this.positionY + "vh";
        
    }
    moveLeft() {
        this.positionX--;
        this.playerElm.style.left = this.positionX + "vw";
    }
    moveRight() {
        this.positionX++;
        this.playerElm.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 100;
        this.height = 10;
        this.width = 30;
        this.obstacleElm = null;

        this.createDomElement()
    }
    createDomElement(){
        // step1: create the element
        this.obstacleElm = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.obstacleElm.classList.add("obstacle")
        this.obstacleElm.style.width = this.width + "vw";
        this.obstacleElm.style.height = this.height + "vh";
        this.obstacleElm.style.left = this.positionX + "vw";
        this.obstacleElm.style.bottom = this.positionY + "vh";

        // step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }
    moveDown(){
        this.positionY--;
        this.obstacleElm.style.bottom = this.positionY + "vh"
    }
}


const player = new Player();

const obstaclesArr = []; // will store instances of the class Obstacle


// create obstacles
setInterval(() => {
    const newObstacle = new Obstacle ();
    obstaclesArr.push(newObstacle);
}, 3000)

// update obstacles
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => {
        // move
        obstacleInstance.moveDown();

        // detect collision
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
          ) {
            // Collision detected!
            location.href = "./gameover.html"
          }
    })
}, 30)


document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft();
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
})