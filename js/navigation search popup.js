    // navigation search
    
    letsearchInput = $('.proinput [type="search"]');
    $('[data-search="open"]').click(function(){
        $('[data-search="window"]').fadeIn('slow').css({display: 'flex'});
        letsearchInput.focus();
    })
    $('[data-search="close"]').click(function(){
        $('[data-search="window"]').fadeOut();
    })
    
	$('[data-tab="block"]').each(function() {
  	$(this).find('[data-tab="nav"]').each(function(index) {
		if(index == 0) {
			$(this).addClass('active');
		};
    	$(this).attr('data-index', index);
    })
    $(this).find('[data-tab="content"]').each(function(index) {
      if(index == 0) {
				$(this).fadeIn();
      };
    	$(this).attr('data-index', index);
    })
  })