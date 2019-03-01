if($('.masonry-gallery').length){
	var $grid = $('.grid').imagesLoaded( function() {
		$grid.masonry({
			itemSelector: '.grid-item',
			percentPosition: true,
			columnWidth: '.grid-sizer'
		});
	});
}
