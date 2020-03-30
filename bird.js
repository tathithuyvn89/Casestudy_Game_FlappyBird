var Bird = function (game) {
    this.game=game;
    this.images=[];
    this.img1Loaded=false;
    this.img2Loaded=false;
    this.img3Loaded=false;
    this.curretImage=null;
    this.currentImageIndex=0;
    this.currentFlame=0;
    this.x=100;
    this.y=0;
    this.speedY=0;
    this.gravity=1.5;
    this.direction="down";
    var self=this;
    this.init=function () {
        this.loadImage()
    }
    this.loadImage = function () {
        var img1= new Image();
        var img2= new Image();
        var img3= new Image();
        img1.onload= function () {
            self.img1Loaded=true;
            self.images.push(img1);
            self.currentImage=img1;
        }
        img2.onload= function () {
            self.img2Loaded=true;
            self.images.push(img2);
            self.currentImage=img2;
        }
        img3.onload= function () {
            self.img3Loaded=true;
            self.images.push(img3);
            self.currentImage=img3;
        }
        //Load all images
        img1.src="img/bird1.png";
        img2.src="img/bird2.png";
        img3.src="img/bird3.png";

    }
    this.update=function () {
        if (!self.img1Loaded||!self.img2Loaded||!self.img3Loaded){
            return;
        }
        self.currentFlame++;
        if (self.currentFlame%10===0) {
            self.changeImage();
        }
        //Neu bi roi thi se tinh theo luc hut trai dat, cang cham dat gan thi cang roi nhanh
        if (this.y<=487){
            if (this.direction);
        this.speedY+=this.gravity;

        } else{
            this.speedY-=this.gravity;
        }
        this.y+=this.speedY;
        if (this.y>420){
            this.y=420;
        }
        // Check game over
        if (this.y>=420){
            self.game.gameOver=true;
        }
        this.checkHitPipe();
    }
    // this.checkHitPipe= function () {
        let count=0;
        console.log("Dang suy nghi")
        if ((this.x+38>=self.game.pipe.x&&this.x<=self.game.pipe.x+52)||(this.y<=self.game.pipe.y&&this.y+26>=self.game.pipe.y-200)){
            self.game.gameOver=true;
            console.log("Dang suy nghi")

        } else {
            count++;
            console.log(count);
        }

    }

    this.flap= function () {
        if (self.game.gameOver){
            return;
        }
        this.speedY=-16;
    }
    this.changeImage=function () {
        if (this.currentImageIndex===2){
            this.currentImageIndex===0;
        } else {
            this.currentImageIndex++;
        }
        this.currentImage=this.images[this.currentImageIndex];

    }

    this.draw =function () {
        if (self.img1Loaded&&self.img2Loaded&&self.img3Loaded){
            self.game.context.drawImage(self.currentImage,this.x,this.y);
        }

    }
}