canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_width = 75;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 5;
car_y = 225;

function add() {
	    background_tag = new Image();
		background_tag.onload = uploadBackground;
		background_tag.src = background_image;

		car_tag = new Image();
		car_tag.onload = uploadgreencar;
		car_tag.src = greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(car_tag, car_x, car_y, car_width, car_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >=80)
	{
		car_y = car_y - 10;
		console.log("When the Up Arrow Key is Clicked, X = " + car_x + ", Y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(car_y <=220)
	{
		car_y = car_y + 10;
		console.log("When the Down Arrow Key is Clicked, X = " + car_x + ", Y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(car_x >= 15)
	{
		car_x = car_x - 10;
		console.log("When the Left Arrow Key is Clicked, X = " + car_x + ", Y = "+ car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(car_x <= 705)
	{
		car_x = car_x + 10;
		console.log("When the Right Arrow Key is Clicked, X = " + car_x + ", Y = " + car_y);
		uploadBackground();
		uploadgreencar();
	}
}
