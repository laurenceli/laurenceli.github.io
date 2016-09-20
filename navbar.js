var body = $(document.body);

var navbarWidth = 80;
var navbarColor = "#000000";

$("#navContainer").append("<div id='navbar'></div>");

var navbar = $('#navbar');

navbar
	.css("width", navbarWidth)
	.css("position", "absolute")
	.css("top", "0px")
	.css("left", "0px")
	;

$("#navContainer").append("<div id='navExpand'></div>");

var navExpand = $('#navExpand');

navExpand
	.css("width", "300px")
	.css("height", "100%")
	.css("position", "absolute")
	.css("top", "0px")
	.css("left", "-220px")
	;

navbar.append('<div id="workButton"></div>');

var workButton = $('#workButton')

workButton
	.addClass("navText")
	.addClass("navButton")
	.css("position", "absolute")
	.css("top", "30px")
	.css("left", "-240px")
	.text("Work")
	; 

navbar.append('<div id="aboutButton"></div>');

var aboutButton = $('#aboutButton')

aboutButton
	.addClass("navText")
	.addClass("navButton")
	.css("position", "absolute")
	.css("top", "100px")
	.css("left", "-240px")
	.text("About")
	; 

navbar.append('<div id="resumeButton"></div>');

var resumeButton = $('#resumeButton')

resumeButton
	.addClass("navText")
	.addClass("navButton")
	.css("position", "absolute")
	.css("top", "170px")
	.css("left", "-240px")
	.text("Resume")
	; 

navbar.append('<div id="contactButton"></div>');

var contactButton = $('#contactButton')

contactButton
	.addClass("navText")
	.addClass("navTitle")
	.css("position", "absolute")
	.css("top", "420px")
	.css("left", "-240px")
	.text("Contact // Social")
	; 

navbar.append('<div id="contactPhone"></div>');

var contactPhone = $('#contactPhone')

contactPhone
	.addClass("navSubtitle")
	.addClass("navText")
	.css("position", "absolute")
	.css("top", "470px")
	.css("left", "-240px")
	.text("613 794 4859")
	; 

navbar.append('<div id="contactEmail"></div>');

var contactEmail = $('#contactEmail')

contactEmail
	.addClass("navSubtitle")
	.addClass("navText")
	.css("position", "absolute")
	.css("top", "490px")
	.css("left", "-240px")
	.text("li.laurence55@gmail.com")
	; 

navbar.append('<div id="socialGithub"></div>');

var socialGithub = $('#socialGithub')

socialGithub
	.addClass("navSubtitle")
	.addClass("navText")
	.addClass("clickableLink")
	.css("position", "absolute")
	.css("top", "530px")
	.css("left", "-240px")
	.text("github.com/laurenceli")
	; 

navbar.append('<div id="socialLinked"></div>');

var socialLinked = $('#socialLinked')

socialLinked
	.addClass("navSubtitle")
	.addClass("navText")
	.addClass("clickableLink")
	.css("position", "absolute")
	.css("top", "550px")
	.css("left", "-240px")
	.text("linkedin.com/in/laurenceli")
	; 

navbar.append('<div id="navHamburgerContainer"></div>');

var navHamburgerContainer = $('#navHamburgerContainer');

var isOpen = false;
$('#navHamburgerContainer')
	.click(function(){
		if(!isOpen){
			navbar.animate({
				width: "300px"
			}, 300);

			workButton.animate({
				left: "20px"
			}, 300);

			aboutButton.animate({
				left: "20px"
			}, 300);

			resumeButton.animate({
				left: "20px"
			}, 300);

			contactButton.animate({
				left: "20px"
			}, 300);

			contactPhone.animate({
				left: "20px"
			}, 300);

			contactEmail.animate({
				left: "20px"
			}, 300);

			socialGithub.animate({
				left: "113px"
			}, 300);

			socialLinked.animate({
				left: "85px"
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

			contactButton.animate({
				left: "-240px"
			}, 300);

			contactPhone.animate({
				left: "-240px"
			}, 300);

			contactEmail.animate({
				left: "-240px"
			}, 300);

			socialGithub.animate({
				left: "-240px"
			}, 300);

			socialLinked.animate({
				left: "-240px"
			}, 300);

			isOpen = false;
		}
	});

	navHamburgerContainer.append('<div id="navIcon"></div>');

	var navIcon = $('#navIcon');

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