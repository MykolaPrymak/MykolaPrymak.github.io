define(['particle'], function(Particle) {
  var PLAYER_MAX_SPEED = (60 * 5); // MAX FPS * maximum time to cross the display

  var Player = Particle.extend({
      init: function(maxWidth, maxHeight) {
          this._super(maxWidth, maxHeight);
          // Set the initial position and size
          this.reset();
          this.speed = (Math.max(maxWidth, maxHeight) / PLAYER_MAX_SPEED); // Max speed
          this.enabled = false;
      },
      play: function() {
        this.enabled = true;
        this.reset();
      },
      stop: function() {
        this.enabled = false;
      },
      reset: function() {
        this.x = (this.maxWidth / 2);
        this.y = (this.maxHeight / 2);
        this.radius = 7;

        this.dstX = this.x; // Destination position
        this.dstY = this.y;

        this.speedX = 0; // Speed by x axis
        this.speedY = 0; // Speed by y axis

        this.dead = false;
      },
      draw: function(ctx) {
        if (this.enabled) {
          this._super(ctx)
        }
      },
      tick: function() {
        if ((this.dstX !== this.x) || (this.dstY !== this.y)) {
          if ((Math.abs(this.x - this.dstX) < this.radius) || (Math.abs(this.y - this.dstY) < this.radius)) {
            this.moveTo(this.dstX, this.dstY);
          }

          if (Math.abs(this.x - this.dstX) < this.speedX) {
            this.speedX = 0;
            this.x = this.dstX;
          } else {
            
          }
          if (Math.abs(this.y - this.dstY) < this.speedY) {
            this.speedY = 0;
            this.y = this.dstY;
          } else {
            
          }
          this.x += this.speedX;
          this.y += this.speedY;
        }
        return this;
      },
      moveTo: function(x, y) {
        x = ~~x;
        y = ~~y;
        // Check borders
        if (x < this.radius) {
          x = this.radius;
        } else if (x > (this.maxWidth - this.radius)) {
          x = this.maxWidth - this.radius;
        }
        if (y < this.radius) {
          y = this.radius;
        } else if (y > (this.maxHeight - this.radius)) {
          y = this.maxHeight - this.radius;
        }
        
        this.dstX = x;
        this.dstY = y;
        // Check the distance to destination point
        var rangeX = Math.abs(x - this.x);
        var rangeY = Math.abs(y - this.y);

        if (rangeX > rangeY) {
          this.speedX = Math.min(this.speed, rangeX);
          this.speedY = ((rangeY / rangeX) * this.speedX) || 0;
        } else {
          this.speedY = Math.min(this.speed, rangeY);
          this.speedX = ((rangeX / rangeY) * this.speedY) || 0;
        }
        if (x < this.x) {
          this.speedX *= -1;
        }
        if (y < this.y) {
          this.speedY *= -1;
        }
      },
      die: function() {
        this.dead = true;
        this.stop();
      },
      isDead: function() {
        return this.dead;
      }
  });
  
  return Player;
});