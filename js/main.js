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

const player = new Player();

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