var body = $(document.body);

var navbarWidth = 80;
var navbarColor = "#000000";

var navbar;
var navHamburgerContainer;
var navIcon;

var workButton;
var aboutButton;
var resumeButton;
var socialContainer;
var contactButton;
var contactPhone;
var contactEmail;
var socialGithub;
var socialLinked;

drawNavBar();
drawNavBarElements();

function drawNavBar(){

	$("#navContainer").append("<div id='navbar'></div>");
	navbar = $('#navbar');

	navbar
		.css("width", navbarWidth)
		.css("position", "absolute")
		.css("top", "0px")
		.css("left", "0px")
		;

	navbar.append('<div id="navHamburgerContainer"></div>');
	navHamburgerContainer = $('#navHamburgerContainer');

	navHamburgerContainer.append('<div id="navIcon"></div>');
	navIcon = $('#navIcon');

	for(var i = 0; i < 4; i++){
		navIcon.append('<span></span>')
	}

	navHamburgerContainer
	.hover(
		function(){
			navIcon.find("span").css("background", "#50FFB1");
		},
		function(){
			navIcon.find("span").css("background", "#818181")
		}
	)
	.click(function(){
		navIcon.toggleClass('open')
	})
	;
}

function drawNavBarElements(){

navbar.append('<div id="workButton"></div>');
workButton = $('#workButton')

workButton
	.addClass("clickableLink")
	.addClass("navText")
	.css("position", "absolute")
	.css("top", "50px")
	.css("left", "-240px")
	.css("font-size", "180%")
	.text("Work")
	; 

navbar.append('<div id="aboutButton"></div>');
aboutButton = $('#aboutButton')

aboutButton
	.addClass("clickableLink")
	.addClass("navText")
	.css("position", "absolute")
	.css("top", "120px")
	.css("left", "-240px")
	.css("font-size", "180%")
	.text("About")
	; 

navbar.append('<div id="resumeButton"></div>');
resumeButton = $('#resumeButton')

resumeButton
	.addClass("clickableLink")
	.addClass("navText")
	.css("position", "absolute")
	.css("top", "190px")
	.css("left", "-240px")
	.css("font-size", "180%")
	.text("Resume")
	; 

navbar.append('<div id="socialContainer"></div>')
socialContainer = $('#socialContainer');

socialContainer
	.css("position", "absolute")
	.css("bottom", "0px")
	.css("right", "240px")
	.css("width", "220px")
	.css("height", "170px")
	.css("z-index", 10);

socialContainer.append('<div id="contactButton"></div>');
contactButton = $('#contactButton')

contactButton
	.addClass("navText")
	.addClass("navTitle")
	.css("position", "absolute")
	.css("bottom", "170px")
	.css("right", "0px")
	.text("Contact // Social")
	; 

socialContainer.append('<div id="contactPhone"></div>');
contactPhone = $('#contactPhone')

contactPhone
	.addClass("navSubtitle")
	.addClass("navText")
	.css("position", "absolute")
	.css("bottom", "130px")
	.css("right", "0px")
	.text("613 794 4859")
	; 

socialContainer.append('<div id="contactEmail"></div>');
var contactEmail = $('#contactEmail')

contactEmail
	.addClass("navSubtitle")
	.addClass("navText")
	.css("position", "absolute")
	.css("bottom", "105px")
	.css("right", "0px")
	.text("li.laurence55@gmail.com")
	; 

socialContainer.append('<div id="socialGithub"></div>');
socialGithub = $('#socialGithub')

socialGithub
	.addClass("navSubtitle")
	.addClass("navText")
	.addClass("clickableLink")
	.css("position", "absolute")
	.css("bottom", "65px")
	.css("right", "30px")
	.text("github.com/laurenceli")
	.on("click", function(){
		window.open('https://github.com/laurenceli', '_blank' );
	})
	; 

socialContainer.append('<div id="socialLinked"></div>');
socialLinked = $('#socialLinked')

socialLinked
	.addClass("navSubtitle")
	.addClass("navText")
	.addClass("clickableLink")
	.css("position", "absolute")
	.css("bottom", "40px")
	.css("right", "30px")
	.text("linkedin.com/in/laurenceli")
	.on("click", function(){
		window.open('https://www.linkedin.com/in/laurenceli', '_blank');
	})
	; 
}

var isOpen = false;
$('#navHamburgerContainer')
	.click(function(){
		if(!isOpen){
			navbar.animate({
				width: "300px"
			}, 300);

			workButton.animate({
				left: "203px"
			}, 300);

			aboutButton.animate({
				left: "193px"
			}, 300);

			resumeButton.animate({
				left: "163px"
			}, 300);

			socialContainer.animate({
				left: "80px"
			}, 300);

			isOpen = true;
		}
		else{
			navbar.animate({
				width: "80px",
			}, 300);

			workButton.animate({
				left: "-240px"
			}, 300);

			aboutButton.animate({
				left: "-240px"
			}, 300);

			resumeButton.animate({
				left: "-240px"
			}, 300);

			socialContainer.animate({
				left: "-240px"
			}, 300);

			isOpen = false;
		}
	});
