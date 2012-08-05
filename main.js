var frames = 0;
var force = 5;
var source = 100;
var sources = [];
var omx, omy;
var mx, my;
var mouseIsDown = false;
var res;
var displaySize = 512;
var fieldRes;
var clear_id;
var running = false;
var canvas = document.getElementById("canvas");

var L = 50;
var distanceRotator = 74;
var distanceRotator2 = 110;


function prepareFrame( field ) {

	// console.log( Math.ceil( ball.vx ), Math.ceil(ball.vy));
	// console.log( ball.vx, ball.vy );

	// field.setVelocity( Math.floor( ball.x + ball.width / 2 ), Math.floor( ball.y + ball.height / 2 ), Math.ceil( -ball.vy ) * 2, Math.ceil( ball.vx ) * 2   );	
	// field.setVelocity( Math.floor( ball.x + ball.width / 2 ), Math.floor( ball.y + ball.height / 2 ), Math.ceil( ball.vy ) * 2, Math.ceil( -ball.vx ) * 2  );	
	

	player.stream = cielabToRGB( L, distanceRotator, distanceRotator2, [0.9642, 1, 0.8249 ] )
	ai.stream = cielabToRGB( L, -distanceRotator, distanceRotator2, [0.9642, 1, 0.8249 ] )
	ball.stream = cielabToRGB( L, distanceRotator, -distanceRotator2, [0.9642, 1, 0.8249 ] )
	// ai.color = cielabToRGB( L, distanceRotator, distanceRotator, [0.9642, 1, 0.8249 ] )
	// player.color = cielabToRGB( L, distanceRotator, distanceRotator, [0.9642, 1, 0.8249 ] )

	field.setDensityRGB( Math.floor( ball.x + ball.width / 2  ) , Math.floor( ball.y + ball.height / 2 ), ball.stream );				

		distanceRotator += 0.5;

		if ( distanceRotator > 110 ) {

			distanceRotator = 74;

		}

		distanceRotator2 -= 0.5;

		if ( distanceRotator2 < 0 ) {

			distanceRotator2 = 110;
		}

    // var RGB2 = cielabToRGB( 0, RGB[0], 0, [0.9642, 1, 0.8249 ] );
	// var RGB3 = cielabToRGB( 0, 0, RGB[1], [0.9642, 1, 0.8249 ] );
    // var RGB4 = cielabToRGB( RGB[2], 0, 0, [0.9642, 1, 0.8249 ] );	
	// field.setDensityG( Math.floor( ball.x  ) , Math.floor( ball.y ), 100);				
	// field.setDensity( Math.floor( ball.x + ball.width / 2  ) , Math.floor( ball.y + ball.height / 2 ), 100);				
	
	if ( player.push ) {
		
		field.setVelocity( Math.floor( player.x + player.width / 2 ), Math.floor( player.y + player.height / 2 ), 50, 0 );	
		field.setDensityRGB( Math.floor( player.x + player.width / 2  ) , Math.floor( player.y + player.height / 2 ), player.stream);				
		
	}
	
	if ( player.suck ) {
	
		// field.setVelocity( Math.floor( player.x + player.width / 2 + 20 ), Math.floor( player.y + player.height / 2 ), -50, 0 );	
		// field.setDensityRGB( Math.floor( player.x + player.width / 2 + 20 ) , Math.floor( player.y + player.height / 2 ), [ 500, 500, 500 ] );

	}				

	if ( ai.push ) {

		field.setVelocity( Math.floor( ai.x - ai.width / 2 ), Math.floor( ai.y + ai.height / 2 ), -50, 0 );	
		field.setDensityRGB( Math.floor( ai.x - ai.width / 2  ) , Math.floor( ai.y + ai.height / 2 ), ai.stream );				
		
	}	

	if ( ai.suck ) {

		// field.setVelocity( Math.floor( ai.x - ai.width / 2 - 20  ), Math.floor( ai.y + ai.height / 2 ), 50, 0 );	
		// field.setDensityRGB( Math.floor( ai.x - ai.width / 2 - 20 ) , Math.floor( ai.y + ai.height / 2 ), [500,500,500]);

	}

}

function stopAnimation() {
	
	if ( running ) {
		
		clearInterval( clear_id );
		running = false;

	}

	return;
	
}

var white = [0.9642, 1, 0.8249 ];

function cielabToRGB( L, a, b, white ) {

	x = white[0] * inverseCielab( ( 1 / 116 ) * ( L + 16 ) + ( 1 / 500 ) * a  ) * 255;
	y = white[1] * inverseCielab( ( 1 / 116 ) * ( L + 16 ) ) * 255;
	z = white[2] * inverseCielab( ( 1 / 116 ) * ( L + 16 ) + ( 1 / 200 ) * b  ) * 255;

	return [ x, y, z];
}

function inverseCielab( t ) {

	if ( t > ( 6 / 29 ) ){

		return Math.pow( t, 3);

	} else {

		return 3 * Math.pow( 6 / 29, 2 )* ( t - 4 / 29);

	}


}

function startAnimation() {
	
	if ( !running ) {

		clear_id = setInterval( updateFrame, 1000/60 );
		running = true;

	}
	return;
	
}


function updateFrame() {
	
	field.update();                    
	loop();
	
}

window.onload=function(){
	
	field = new FluidField(canvas);
	field.setUICallback(prepareFrame);
	field.setDisplayFunction(toggleDisplayFunction(canvas));

	init();

	// ai.multiplayer = true;
	
	updateRes = function() {
		
		var r = 96;
		canvas.width = r;
		canvas.height = r;
		fieldRes = r;
		field.setResolution(r, r);
        init(); // make this an injector
		
	}
	
	updateRes();     
	startAnimation();
	
}
