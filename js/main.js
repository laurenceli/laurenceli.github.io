mainContainer.append('<div id="workPanel1"></div>')
var workPanel1 = $('#workPanel1');

workPanel1
	.css("position", "relative")
	.css("float", "left")
	.css("height", "400px")
	.css("width", "60%")
;

mainContainer.append('<div id="workPanel2"></div>')
var workPanel2 = $('#workPanel2');

workPanel2
	.css("position", "relative")
	.css("float", "left")
	.css("height", "400px")
	.css("width", "40%")
;


mainContainer.append('<div id="centerBanner"></div>')
var centerBanner = $('#centerBanner');

centerBanner
	.css("width", "100%")
	.css("height", "200px")
	.css("position", "relative")
	.css("top", "400px")
	.css("left", "0px")
	;

centerBanner.append('<div id="bannerTitlesContainer"></div>');
var bannerTitlesContainer = $('#bannerTitlesContainer');

bannerTitlesContainer
	.css("position", "absolute")
	.css("top", "0px")
	.css("left", "0px")
	.css("background-color", "#48e59f")
	.css("z-index", 10)
	.css("height", "100%")
	.css("width", "500px")
	;

bannerTitlesContainer.append('<h1 id="bannerTitle">Laurence Li</h1>')
var bannerTitle = $('#bannerTitle');

bannerTitle.addClass("bannerElement").css("top", "42px").css("left", "35px").css("color", "#fff");

bannerTitlesContainer.append('<h2 id="bannerSubtitle">Student // University of Ottawa, Computer Science</h2>')
var bannerSubtitle = $('#bannerSubtitle')

bannerSubtitle.addClass("bannerElement").css("top", "110px").css("left", "38px").css("color", "#fff");

centerBanner.append('<div id="blurbText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>');
var blurbText = $('#blurbText');
blurbText			
	.css("position", "absolute")
	.css("z-index", 9)
	.css("background-color", "#f7f7f7")
	.css("top", "0px")
	.css("left", "0px")
	.css("height", "100%")
	.css("width", "500px")
	.css("padding", "20px 30px 20px 30px")
	.css("box-sizing", "border-box")
	.css("font-family", "Work Sans, sans-serif")
	.css("font-size", "80%")
	.css("letter-spacing", "1px")
	.css("line-height", "25px")
	.css("border-top", "1px solid #48e59f")
	.css("border-bottom", "1px solid #48e59f")
	.css("color", "#8AB0AB")
	;

var isExpanded = false;


centerBanner.append('<div id="verticalLine"></div>');
var verticalLine = $('#verticalLine');

verticalLine
	.css("height", "100%")
	.css("width", "1px")
	.css("background-color", "#f7f7f7")
	.css("position", "absolute")
	.css("top", "0px")
	.css("left", "515px")
	.css("opacity", "0.3")
	.css("z-index", 9)
	;

centerBanner.append('<div id="expandButton"></div>');
var expandButton = $('#expandButton');

expandButton
	.css("z-index", 10)
	.css("width", "30px")
	.css("height", "30px")
	.css("background-color", "white")
	.css("position", "absolute")
	.css("border-radius", 20)
	.css("border", "1px solid #48e59f")
	.css("top", "85px")
	.css("left", "500px")
	.hover(
		function(){
			$(this)
				.css("background-color", "#48e59f")
				.css("border", "1px solid white");

			$(this).find("span").css("background", "white");
		},
		function(){
			$(this)
				.css("background-color", "white")
				.css("border", "1px solid #48e59f");

			$(this).find("span").css("background", "#48e59f");
		})
	.on("click", function(){
		$(this)
			.css("background-color", "white")
			.css("border", "1px solid #48e59f")
		;
		$(this).find("span").css("background", "#48e59f");

		if(!isExpanded){
			blurbText.animate({
				left: "500px"
			}, 300);

			$(this)
				.animate({
					left: "985px",
					backgroundColor: "white"
				}, 300)
				.toggleClass('expanded');

			isExpanded = true;
		}
		else{
			blurbText.animate({
				left: "0px"
			}, 300);

			$(this)
				.animate({
				left: "500px",
					backgroundColor: "48e59f"
				}, 300)
				.toggleClass('expanded');;

			isExpanded = false;
		}
	});

	expandButton.append('<span></span>');
	expandButton.append('<span></span>');