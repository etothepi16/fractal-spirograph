var k = 4; 

function Orbit(x_, y_, r_, n_, p) {
    
    this.x = x_;
    this.y = y_;
    this.r = r_;
    this.n = n_;
    this.speed = (radians(pow(k, this.n-1)))/resolution;
    this.angle = -PI/2;
    this.parent = (p ? p : null);
    this.child = null;

    this.addChild = function(){
        var newr = this.r / 3.0;
        var newx = this.x + this.r + newr;
        var newy = this.y;
        this.child = new Orbit(newx, newy, newr, this.n+1, this);
        return this.child;
    }
    this.update = function() {
        if (this.parent != null) {
        this.angle += this.speed;
        var rsum = this.r + this.parent.r;
        this.x = this.parent.x + rsum * cos(this.angle);
        this.y = this.parent.y + rsum * sin(this.angle);
        }
    } 
    this.show = function(){
        stroke(255, 100);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}