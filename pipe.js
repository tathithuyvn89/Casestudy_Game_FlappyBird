var Pipe = function (game) {
    this.game=game;
    this.ppimg1=null;
    this.ppimg2=null;
    this.ppimg1loaded=false;
    this.ppimg2loaded=false;
    this.x=300;
    this.y=0;
    this.init=function () {
        this.loadImage();
    };
    this.loadImage=function () {
        this.ppimg1= new Image();
        this.ppimg2= new Image();
        this.ppimg1.onload=function () {
            self.ppimg1loaded=true;
        };
        this.ppimg1.src="img/pipeNorth.png";

        this.ppimg2.onload=function () {
            self.ppimg2loaded=true;
        }
        this.ppimg2.src="img/pipeSouth.png";
    };
    this.update=function () {
        if (self.game.gameOver){
            return;
        };
        this.x-=2;
        if (this.x===-52){
            this.x=300;
            this.y=Math.floor(Math.random()*242)-242;
        }
        console.log("lamgg")

    };

    this.draw =function () {
        if (self.ppimg1loaded===false||self.ppimg2loaded===false){
            return;
        }
        self.game.context.drawImage(self.ppimg1,this.x,this.y);
        console.log("nhjmm");
        self.game.context.drawImage(self.ppimg2,this.x,this.y+100);
    }
};
