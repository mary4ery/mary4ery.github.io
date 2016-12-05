/* The toggle articles */


var $articleToggle = $('.article-toggle');
var $articleContents = $('.article-content');
/* console.log('$articleToggle'); */

/*
$articleToggle.click(function () {
}) 
function toggleArticles() {
}
*/

$articleToggle.click(toggleArticles);

function toggleArticles() {
	/* $('.article-content').show(); открывает сразу все статьи */
	var $this = $(this);
	/* console.log($this) */
	var $parentArticle = $this.parents('.article');
	var $toggleContent = $parentArticle.find('.article-content');
	/* console.log($toggleContent.css('display')); */

	/*var isHidden = $toggleContent.css('display');

	if (isHidden) {
		$toggleContent.show();
	} else {
		$toggleContent.hide();
	}*/

	var displayValue = $toggleContent.css('display');

	if (displayValue == 'none') {
		$articleContents.hide();
		$toggleContent.show();
		$this.text ('close article');
	} else {
		$toggleContent.hide();
		$this.text ('open article')
	}
}


/* Gallery */
var $galleryMain = $ ('.gallery-main');
var $galleryItem = $ ('.gallery-item');

$galleryItem.click(changePhoto);

function changePhoto() {
	var $this = $(this);

	/* Change images */
	var newImage = $this.css('backgroundImage');
	$galleryMain.css('backgroundImage', newImage);
}
	/* Change active images */
	$this.addClass ('active');
	$galleryItem.removeClass ('active');

























