/* Curso de Programación Básica 
 * Ciclos y Dibujos con canvas.
 * Dibujos con Canvas.
 */
var dibujo, lienzo, t, b;

function inicio() {

	t = document .getElementById( 'usuario' );
	b = document .getElementById( 'dibujalo' );

	// Elemento canvas.
	dibujo = document .getElementById( 'dibujito' );
	// Eje interno de coordenadas, contexto del canvas.
	lienzo = dibujo .getContext( '2d' );

	b .addEventListener( 'click', dibujarGrilla );

	// Caminos o Paths (trazo nuevo con otro color)
	lienzo .beginPath();
	lienzo .strokeStyle = "#8B0000";
	lienzo .fillStyle = "#FA8072";		// Color de relleno.
	lienzo .arc( 150, 150, 100, ( Math.PI * 2 ), false ); // arc( x, y, radio, longitud en radianes, trazar con las manecillas del reloj? );
	lienzo .fill();						// Rellena.
	lienzo .closePath();
	lienzo .stroke();

}

function dibujarGrilla() {

	var ancho = 300, 
		alto = 300,
		rayas = Number( t.value ),
	    espacioEntreLineas = ancho / rayas,
	    limiteX = ancho / espacioEntreLineas;
	    limiteY = alto / espacioEntreLineas;

	lienzo .strokeStyle = '#AAA';

	for( var linea = 0; linea <= limiteX; linea++ ) {
		lienzo .beginPath();
		lienzo .moveTo ( linea * espacioEntreLineas, 0 );
		lienzo .lineTo ( 0, linea * espacioEntreLineas );
		lienzo .moveTo ( linea * espacioEntreLineas, alto );
		lienzo .lineTo ( ancho, linea * espacioEntreLineas );
		lienzo .stroke();
		lienzo .closePath();
	}

	for( var linea = 0; linea <= limiteY; linea++ ) {
		lienzo .beginPath();
		lienzo .moveTo( 0, alto - ( linea * espacioEntreLineas) );
		lienzo .lineTo( linea * espacioEntreLineas, alto );
		lienzo .moveTo( ancho - ( linea * espacioEntreLineas ), 0 );
		lienzo .lineTo( ancho, linea * espacioEntreLineas );
		lienzo .stroke();
		lienzo .closePath();
	}

}