var Game = function () {
    this.canvas = null;
    this.context = null;
    this.width= 288;
    this.height = 512;
    this.bird=null;
    this.bg=null;
    this.fg=null;
    this.pipe = null;
    //Game status
    this.gameOver=false;
    var self= this;
    this.init = function () {
        this.canvas=document.createElement("canvas");
        this.context= this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.canvas.width=this.width;
        this.canvas.height=this.height;
        document.body.appendChild(this.canvas);
        //Creat new bird
        this.bird= new Bird(this);
        this.bird.init();
        // Creat background;
        this.bg= new Bg(this);
        this.bg.init();
        // Creat base
        this.fg= new Fg(this);
        this.fg.init();
        // Creat pipe
        // this.pipe= new Pipe(this);
        // this.pipe.init();
        this.listenMouse();
        this.loop();
    }
    this.listenMouse=function () {
        this.canvas.addEventListener("click",function () {
           self.bird.flap();
        });

    }
    this.loop= function () {
        self.update();
        self.draw();
        setTimeout(self.loop,33);

    }
    this.update=function () {
        this.bird.update();
        this.bg.update();
        // this.pipe.update();
        this.fg.update();

    }
    this.draw=function () {
        this.bg.draw();
        // this.pipe.draw();
        this.fg.draw();
        this.bird.draw();

    }
}

 var game = new Game();
game.init();
