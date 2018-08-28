$( function() {
	
	var LR = false;		
	
	
	$( '#total_wrap > nav > #menu_btn' ).click( function() {
				
		LR = !LR;		
		
		
		if( LR ) {
			
			$( '#total_wrap > nav' ).animate( { 'right' : '0' }, 1000, 'easeOutExpo' );
			$( '#t_stick' ).animate( { 'top' : '24px' }, 500, 'easeOutExpo',
			
				
				function() {
					$( '#t_stick, #m_stick' ).transition( { 'rotate' : '45deg' }, 500, 'easeOutExpo' );
				}
			);
			
			$( '#b_stick' ).animate( { 'top' : '24px' }, 500, 'easeOutExpo',
			
			
				function() {
					$( '#b_stick' ).transition( { 'rotate' : '-45deg' }, 500, 'easeOutExpo' );
				}
			);
	
		} else {
			
			$( '#total_wrap > nav' ).animate( { 'right' : '-80px' }, 1000, 'easeOutExpo' ); 
			
			$( '.stick' ).transition( { 'rotate' : '0' }, 500, 'easeOutExpo', 
				
				function() {
					$( '#t_stick' ).animate( { 'top' : '15px' }, 500, 'easeOutExpo' );
					$( '#b_stick' ).animate( { 'top' : '33px' }, 500, 'easeOutExpo' );
				}
			
			);
			
		}
	});

});