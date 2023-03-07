const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    draw(dx, dy){
        if(this.x + dx + 10 >= canvas.width || this.y + dy + 10 >= canvas.height || this.x + dx - 10 <= 0 || this.y + dy -10 <= 0){
            clearInterval(timer1);
        }
        ctx.beginPath();
        ctx.arc(this.x + dx, this.y + dy, 10, 0, Math.PI * 2);
        ctx.fill();
        this.x = this.x + dx;
        this.y = this.y + dy;
    }
}
let obj = new Point(250, 250);
obj.draw(0, 0);
let k1 = 0;
let k2 = -1;
let timer1 = setInterval(()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.addEventListener('keydown', (event)=>{
        console.log(event.keyCode);
        if(event.keyCode == 38){
            k1 = 0;
            k2 = -1;
        }
        else if(event.keyCode == 40){
            k1 = 0;
            k2 = 1;
        }
        else if(event.keyCode == 39){
            k1 = 1
            k2 = 0;
        }
        else if(event.keyCode == 37){
            k1 = -1;
            k2 = 0;
        }
    })
    obj.draw(10 * k1, 10 * k2);
}, 300)