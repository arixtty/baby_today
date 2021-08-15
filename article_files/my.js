(function($) {
	var tablet = window.matchMedia('(max-width: 1023px)');
	
	$(document).on('submit', '.seach_block form', function(e) {
		if (tablet.matches) {
			var $this = $(this);
			var $container = $this.closest('.seach_block');
			
			if ( !$container.hasClass('open') ) {
				e.preventDefault();
				
				$container.addClass('open');
			}
		}
	});
		
	$(document).on('click', function(e) {
		if (tablet.matches) {
			if($(e.target).closest('.seach_block').length < 1) {
				$('.seach_block').removeClass('open');
			}
		}
	});
	
	$(document).on('click', '.js-mobile-menu-close', function(e) {
		e.preventDefault();
		
		$(this).closest('.mobile-menu').removeClass('mobile-menu_open');
	});
	
	$(document).on('click', '.js-mobile-menu-open', function(e) {
		e.preventDefault();
		var $menu = $($(this).data('target'));
		
		if ($menu.length > 0) {
			$menu.addClass('mobile-menu_open');
		}
	});
	
	$(document).on('click', '.mobile-menu-nav a', function(e) {
		var $this = $(this);
		var $li = $this.closest('li');
		var $childMenu = $li.find('> ul');
		
		if ($childMenu.length > 0) {
			e.preventDefault();
			
			var $container = $this.closest('.mobile-menu');
			
			$container.addClass('mobile-menu_child-menu-open');
			
			$li.addClass('child-menu-open');
			
			$container.find('.mobile-menu-title').html($this.text());
		}
	});
	
	$(document).on('click', '.js-mobile-menu-back', function(e) {
		e.preventDefault();
		
		var $this = $(this);
		var $container = $this.closest('.mobile-menu');
		
		$container.removeClass('mobile-menu_child-menu-open');
		$container.find('.mobile-menu-title').html('');
		$container.find('.child-menu-open').removeClass('child-menu-open');
		
	});
})(jQuery);