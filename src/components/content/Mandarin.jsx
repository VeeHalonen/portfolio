import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

/* Old code aka "Don't look at me, I'm 'ideous!" */

var myGamePiece;
var myGamePiece2;
var heartPiece;
var normbg;
var winbg;
var ctx;

function startGame() {
  myGamePiece = new component(
    42,
    47,
    require("../../assets/mandarina/mandarin2.png"),
    10,
    120,
    "image"
  );
  myGamePiece2 = new component(
    36,
    48,
    require("../../assets/mandarina/lemon.png"),
    300,
    120,
    "image"
  );
  heartPiece = new component(
    40,
    38,
    require("../../assets/mandarina/heart-157895_960_720.png"),
    10,
    10,
    "image"
  );
  winbg = new component(
    480,
    270,
    require("../../assets/mandarina/fireworks.jpg"),
    0,
    0,
    "image"
  );
  normbg = new component(
    480,
    270,
    require("../../assets/mandarina/bg.jpg"),
    0,
    0,
    "image"
  );
  myGameArea.start();
  ctx = myGameArea.context;
}

var myGameArea = {
  // canvas: document.createElement("canvas"),
  canvas: document.getElementById("mandarinCanvas"),
  start: function () {
    this.canvas = document.getElementById("mandarinCanvas");
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);

    window.addEventListener("keydown", function (e) {
      myGameArea.keys = myGameArea.keys || [];
      myGameArea.keys[e.keyCode] = true;
    });
    window.addEventListener("keyup", function (e) {
      myGameArea.keys[e.keyCode] = false;
    });
    window.addEventListener("touchmove", function (e) {
      myGameArea.x = e.touches[0].screenX;
      myGameArea.y = e.touches[0].screenY;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type === "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    if (type === "image") {
      try {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } catch (error) {
        // console.log(error);
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  myGameArea.clear();
  /*if (myGamePiece.speedX != 0 || myGamePiece.speedY != 0) {
        myGamePiece.image.src = "mandarin.png";
    }*/

  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;

  if (myGameArea.x && myGameArea.y) {
    myGamePiece.x = myGameArea.x;
    myGamePiece.y = myGameArea.y - 25;
  }

  if (myGameArea.keys && myGameArea.keys[37]) {
    myGamePiece.image.src = require("../../assets/mandarina/mandarin3.png");
    myGamePiece.speedX = -2;
  }
  if (myGameArea.keys && myGameArea.keys[39]) {
    myGamePiece.image.src = require("../../assets/mandarina/mandarin2.png");
    myGamePiece.speedX = 2;
  }
  if (myGameArea.keys && myGameArea.keys[38]) {
    myGamePiece.speedY = -2;
  }
  if (myGameArea.keys && myGameArea.keys[40]) {
    myGamePiece.speedY = 2;
  }

  myGamePiece.newPos();

  if (
    myGamePiece.x + myGamePiece.width >= myGamePiece2.x &&
    myGamePiece.x <= myGamePiece2.x + myGamePiece2.width &&
    myGamePiece.y + myGamePiece.height >= myGamePiece2.y &&
    myGamePiece.y <= myGamePiece2.y + myGamePiece2.height
  ) {
    //alert("The mandarin has found home! <3");

    ctx.drawImage(winbg.image, 0, 0, 480, 270);
    ctx.drawImage(
      heartPiece.image,
      (myGamePiece.x + myGamePiece2.x) / 2,
      myGamePiece2.y - 30,
      40,
      38
    );
  } else {
    normbg.update();
  }
  myGamePiece2.update();
  myGamePiece.update();
}

const Mandarin = () => {
  // Start on mount
  useEffect(() => {
    startGame();
  }, []);

  // Stop on unmount
  useEffect(() => {
    return () => {
      myGameArea.stop();
    };
  }, []);

  return (
    <>
      <Typography paragraph>
        <canvas id="mandarinCanvas"></canvas>
      </Typography>
      <Typography paragraph>
        This little game was originally a birthday "card" to my partner and also
        doubled as an exercise to reacquaint myself with what little JavaScript
        I had once known.
      </Typography>
      <Typography paragraph>
        On Desktop, use the arrow keys to move. On mobile, dragging the orange
        may or may not work, as that functionality has not yet been fully
        implemented.
      </Typography>
    </>
  );
};

export default Mandarin;
