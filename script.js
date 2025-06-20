//complete this code
class Rectangle {
	cunstructor(width, height){
		if(width<=0 || height<=0){
			throw new Error("Width and height must be positive integers.");
		}
		this.width=width;
		this.height=height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	getArea(){
		return this.width * this.height;
	}
}

class Square extends Animal {
	constructor(side){
		if(side<=0){
			throw new Error("Side must be a positive integers.")
		}
		super(side, side);
	}
	getPerimeter(){
		return this.width * 4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
