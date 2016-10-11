var body = $(document.body);

var navbarWidth = 80;

var navbar;
var navHamburgerContainer;
var navIcon;

var linksContainer;
var socialContainer;
var contactTItle;
var linked = [];

drawNavBar();
drawNavBarElements();

function drawNavBar(){

	body.append("<div id='navbar'></div>");
	navbar = $('#navbar');

	navbar
		.css("width", navbarWidth + "px")
		.css("height", "100%")
		.css("position", "fixed")
		.css("top", "0px")
		.css("left", "0px")
		;

	navbar.append('<div id="navHamburgerContainer"></div>');
	navHamburgerContainer = $('#navHamburgerContainer');

	navHamburgerContainer.append('<div id="navIcon"></div>');
	navIcon = $('#navIcon');

	for(var i = 0; i < 4; i++){
		navIcon.append('<span></span>') //loop to create hamburger menu lines
	}

	navHamburgerContainer
	.hover(
		function(){
			navIcon.find("span").css("background", "#50FFB1");
		},
		function(){
			navIcon.find("span").css("background", "#818181");
		}
	)
	.click(function(){
		navIcon.toggleClass('open');
	})
	;
}

function drawNavBarElements(){

	var linksText = ["About", "Projects", "Resume"];
	var linkElements = [];
	var linkElementsCounter = 0;
	var socialText = ["613 794 4859", "li.laurence55@gmail.com", "github.com/laurenceli", "linkedin.com/in/laurenceli"];

	navbar.append('<div id="linksContainer"></div>');
	linksContainer = $('#linksContainer');

	linksContainer
		.css("position", "absolute")
		.css("top", "0px")
		.css("right", "80px")
		.css("width", "150px")
		.css("height", "230px")
		.css("z-index", 10)
		;

	linksContainer.append('<ul id="links"></ul>')
	var links = $('#links');

	for(var i = 0; i < linksText.length; i++){
		links.append('<li class="navLink clickableLink" id="' + linksText[i] + '" style="list-style-type:none">' + linksText[i] + '</li>');
		linkElements[i] = $('#' + linksText[i]);
	}


	linkElements[0].on("click", function(){
		currentPage.hide();
		showMainPage();
	})

	linkElements[2].on("click", function(){
		window.open('docs/laurenceli_resume_v4.pdf', '_blank' );
	})


	navbar.append('<div id="socialContainer"></div>')
	socialContainer = $('#socialContainer');

	socialContainer
		.css("position", "absolute")
		.css("bottom", "0px")
		.css("right", "240px")
		.css("width", "220px")
		.css("height", "180px")
		.css("z-index", 10);

	socialContainer.append('<div id="contactTitle"></div>');
	contactTitle = $('#contactTitle')

	contactTitle
		.addClass("navTitle")
		.css("position", "absolute")
		.css("top", "0px")
		.css("right", "0px")
		.text("Contact // Social")
		; 

	socialContainer.append('<ul id="social"></ul>')
	var social = $('#social');
	social
		.css("position", "absolute")
		.css("top", "50px")
		.css("right", "0px");

	for(var i = 0; i < socialText.length; i++){
		if(i < 2){
			social.append('<li class="navSocial notClickable" id="socialItem' + i + '" style="list-style-type:none">' + socialText[i] + '</li>');
		}
		else{ 
			social.append('<li class="navSocial clickableLink" id="socialItem' + i + '" style="list-style-type:none">' + socialText[i] + '</li>');
		}
	}

	var socialItem2 = $('#socialItem2');
	socialItem2
		.on("click", function(){
				window.open('https://www.github.com/laurenceli' , '_blank' );
			})
		;

	var socialItem3 = $('#socialItem3');
	socialItem3
		.on("click", function(){
				window.open('https://www.linkedin.com/in/laurenceli' , '_blank' );
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

			linksContainer.animate({
				right: "0px"
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

			linksContainer.animate({
				right: "80px"
			}, 300);

			socialContainer.animate({
				left: "-240px"
			}, 300);

			isOpen = false;
		}
	});
