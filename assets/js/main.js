const scan = document.querySelector( ".scan-wrap" );
let animated = false;

scan.addEventListener( "mouseenter", (e) => {
	scan.classList.add( "animating" );
	document.querySelector( ".scan h3" ).innerHTML = "Escaneando...";
	sorteio = Math.floor( ( Math.random() * (5000 - 1666 ) ) + 1666 );
	timeoutId = window.setTimeout(function(){
		scan.classList.remove( "animating" );
		document.querySelector( ".scan .fingerprint" ).style.backgroundImage = "url('assets/images/handPrint_02.png')";
		scan.classList.add( "animated" );
		document.querySelector( ".scan h3" ).innerHTML = "Direcionando...";
		animated = true;
	}, sorteio);
});

scan.addEventListener( "mouseleave", (e) => {
	if ( !animated ) {
		scan.classList.remove( "animating" );
		window.clearTimeout( timeoutId );
		document.querySelector( ".scan h3" ).innerHTML = "Retirou muito rápido";
	}
});