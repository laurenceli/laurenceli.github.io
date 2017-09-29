var body = $(document.body);

var navbar, navIconContainer, navIcon, navMenu;
var linksContainer, socialContainer, contactTitle;
var isOpen = false;

drawNavBar();
drawLinksList();
drawSocialList();

body.append('<div id="navModal"></div>');
$('#navModal')
	.on('click', function(){
		toggleNav();
		navIcon.toggleClass('open');
	})
	.hide();

function drawNavBar(){

	body.append("<div id='navbar'></div>");
	navbar = $('#navbar');

	body.append('<div id="navIconContainer"></div>');
	navIconContainer = $('#navIconContainer');

	navIconContainer.append('<div id="navIcon"></div>');
	navIcon = $('#navIcon');

	for(var i = 0; i < 4; i++){ navIcon.append('<span></span>') }

	navIconContainer
	.hover(
		function(){navIcon.find("span").css("background", "#48e59f");},
		function(){navIcon.find("span").css("background", "#818181");}
	)
	.click(function(){ navIcon.toggleClass('open'); });

	body.append('<div id="navMenu"></div>');
	navMenu = $('#navMenu');
}

function drawLinksList(){
	var linksText = ["ABOUT", "PROJECTS", "RESUME"];
	var linkElements = [];
	var linkElementsCounter = 0;

	navMenu.append('<div class="menuList" id="linksContainer"></div>');
	linksContainer = $('#linksContainer');

	linksContainer
		.css("position", "absolute")
		.css("right", "200px")
		.css("top", "0px")
		.css("z-index", 10)
		;

	linksContainer.append('<ul class="links" id="navLinks"></ul>')
	var links = $('#navLinks');

	links
		.css("position", "absolute")
		.css("top", "0px")
		.css("left", "0px");

	for(var i = 0; i < linksText.length; i++){
		links.append('<li class="clickableLink" id="' + linksText[i] + '" style="list-style-type:none">' + linksText[i] + '</li>');
		linkElements[i] = $('#' + linksText[i]);
	}

	setClickable(linksText[1], "https://github.com/laurenceli");
	setClickable(linksText[2], "docs/laurenceli_resume_dev.pdf");
}

function drawSocialList(){
	var socialText = ["613 794 4859", "li.laurence55@gmail.com", "Github Profile", "LinkedIn Profile"];

	navMenu.append('<div class="menuList" id="socialContainer"></div>')
	socialContainer = $('#socialContainer');

	socialContainer
		.css("position", "absolute")
		.css("bottom", "215px")
		.css("right", "30px")
		.css("z-index", 10)

	socialContainer.append('<div id="contactTitle"></div>');
	contactTitle = $('#contactTitle')

	contactTitle
		.css("position", "absolute")
		.css("top", "0px")
		.css("right", "0px")
		.text("CONTACT")
		; 

	socialContainer.append('<ul class="social" id="navSocial"></ul>')
	var social = $('#navSocial');
	social
		.css("position", "absolute")
		.css("top", "50px")
		.css("right", "0px");

	for(var i = 0; i < socialText.length; i++){
		social.append('<li class="notClickable" id="socialItem' + i + '" style="list-style-type:none">' + socialText[i] + '</li>');
	}

	setClickable("socialItem2", "https://www.github.com/laurenceli");
	setClickable("socialItem3", "https://www.linkedin.com/in/laurenceli");
}

function setClickable(id, link){
	$('#' + id)
		.removeClass('notClickable')
		.addClass('clickableLink')
		.on('click', function(){ window.open(link, '_blank')})
}

$('#navIconContainer').click(function(){
	toggleNav();
})

function toggleNav(){
	(!isOpen) ? navMenu.animate({left: "0px"}, 300) : navMenu.animate({left: "-245px",}, 300);
	(!isOpen) ? $('#navModal').show() : $('#navModal').hide();
	isOpen = !isOpen;
}