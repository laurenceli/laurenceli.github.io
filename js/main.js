var infoSection;
var programmingSkills;
var skillsTitleContainer;
var skillsContainer;
var pModal;

var programmingArray = ["JavaScript", "Java"];
var webArray = ["HTML/CSS", "jQuery", "React", "D3", "SASS"];
var mobileArray = ["React Native"];
var infraArray = [""];
var otherArray = ["Git/Github",  "Adobe Creative Suite", "Windows", "MacOS", "Linux"];
var languageArray = ["English", "French"];
var dls1Array = ["Junior Developer (May 2016 - August 2016)"];
var dls2Array = ["Technical Support Coordinator (May 2014 - August 2014)"];
var emptyArray = [""];

var cherrypicker = {
	ID: "Cherrypicker",
	title: "CHERRYPICKER.IO", 
	subtitle: "Web Application", 
	link: "http://cherrypicker.io", 
	image: "images/cherrypicker-mockup.jpg",
	github: "https://github.com/laurenceli/cherrypicker.io" 
};

var friendmap = {
	ID: "Friendmap",
	title: "FRIENDMAP", 
	subtitle: "Mobile Application", 
	link: "", 
	image: "images/friendmap-mockup.jpg",
	github: "https://github.com/laurenceli/friendmap"
};

var projectInfo = [cherrypicker, friendmap];
var pPanelsArray = [];
var pPanelsCounter = 0;

$( window ).resize(function() {
	mainContainer.css("height", "100%");
})

function showMainPage(){
	mainContainer.show();
	currentPage = mainContainer;
	changeURL("#about");

}

function drawMainPage(){

	drawProjectPanel(projectInfo[0], "Cherrypicker", true);
	drawProjectPanel(projectInfo[1], "FriendMap", false);

	mainContainer.append('<div id="centerBanner"></div>')
	var centerBanner = $('#centerBanner');

	centerBanner
		.css("width", "100%")
		.css("height", "200px")
		.css("position", "relative")
		//.css("margin-top", "2%")
		.css("top", "450px")
		.css("left", "0px")
		;

	centerBanner.append('<div id="bannerTitlesContainer"></div>');
	var bannerTitlesContainer = $('#bannerTitlesContainer');

	bannerTitlesContainer
		.css("position", "absolute")
		.css("top", "0px")
		.css("left", "0px")
		//.css("background-color", "#DF9A57")
		.css("z-index", 10)
		.css("height", "100%")
		.css("width", "700px")
		;

	bannerTitlesContainer.append('<h1 id="bannerTitle">Laurence Li</h1>')
	var bannerTitle = $('#bannerTitle');

	bannerTitle.addClass("bannerElement").css("top", "42px").css("left", "37px").css("color", "#8AB0AB");

	bannerTitlesContainer.append('<h2 id="bannerSubtitle">Student // University of Ottawa, Candidate for B.Sc in Computer Science</h2>')
	var bannerSubtitle = $('#bannerSubtitle')

	bannerSubtitle.addClass("bannerElement").css("top", "110px").css("left", "43px").css("color", "#999999");

	mainContainer.append('<div id="infoSection"></div>')
	infoSection = $('#infoSection');

	infoSection
		.css("width", "100%")
		.css("height", "400px")
		.css("position", "absolute")
		.css("top", "650px")
		.css("left", "0px")
		.css("background-color", "#f7f7f7")
		;

	drawSkills(emptyArray, "SKILLS");
	drawSkills(programmingArray, "PROGRAMMING");
	drawSkills(webArray, "WEB");
	drawSkills(mobileArray, "MOBILE");
	drawSkills(otherArray, "OTHER");
	drawSkills(languageArray, "LANGUAGE");

	drawExperience(emptyArray, "EXPERIENCE", "EXPERIENCE");
	drawExperience(dls1Array, "DLS1", "DLS TECHNOLOGY");
	drawExperience(dls2Array, "DLS2", "DLS TECHNOLOGY");

	$('#skillsTitle0')
		.css("top", "0px")
		.css("font-size", "100%")
		.css("font-family", "Montserrat, sans-serif")

	$('#expTitle0')
		.css("top", "0px")
		.css("font-size", "100%")
		.css("font-family", "Montserrat, sans-serif")

}

function drawProjectPanel(project, ID, hasLink){
	mainContainer.append('<div class="projectImage" id="pImage' + ID + '"></div>');
	pPanelsArray[pPanelsCounter] = $('#pImage' + ID);

	pPanelsArray[pPanelsCounter]
		.css("position", "relative")
		.css("float", "left")
		.css("height", "450px")
		.css("width", "50%")
		//.css("width", "48.5%")
		//.css("margin", "1% 0 1% 1%")
		//.css("border-radius", "2px")
		.css("background", "url(" + project.image + ") no-repeat")
		.css("background-size", "cover")
		;

	pPanelsArray[pPanelsCounter].append('<div class="projectPanel" id="pPanel' + ID +'"></div>');
	pPanel = $('#pPanel' + ID);

	pPanel
		.css("position", "absolute")
		.css("left", "0px")
		.css("top", "0px")
		.css("height", "450px")
		.css("background-color", "rgba(0,0,0,0.4)")
		.css("width", "100%")
		.css("border-radius", "2px")
		.css("text-align", "center")
	;

	pPanel.append('<h5 id="pLabel' + ID + '">' + project.title + '</h5>');
	var pLabel = $('#pLabel' + ID);

	pLabel
		.css("position", "relative")
		.css("display", "inline-block")
		.css("margin", "0px")
		.css("padding", "0px")
		.css("color", "#FFFFFF")
		.css("top", "50%")
		.css("transform", "translateY(-50%)")
		.css("cursor", "pointer")
		.on('click', function(){
			drawModal(project);
		})
		;

	pPanel.append('<h5 id="pSubtitle' + ID + '">' + project.subtitle + '</h5>');
	var pSubtitle = $('#pSubtitle' + ID);

	pSubtitle
		.css("position", "absolute")
		.css("top", "10px")
		.css("left", "35px")
		.css("color", "#FFFFFF")
		.css("font-size", "60%")
		;

	if(hasLink){

	pPanel.append('<div class="linkIcon" id="pLinkIcon' + ID + '"></div>');
	var pLinkIcon = $('#pLinkIcon' + ID);

	pLinkIcon
		.css("width", "25px")
		.css("height", "25px")
		.css("position", "absolute")
		.css("bottom", "30px")
		.css("right", "35px")
		.css("cursor", "pointer")
		.on("click", function(){
				window.open(project.link , '_blank' );
			})
		;
	}

	pPanel.append('<div class="githubIcon" id="pGitLogo' + ID + '"></div>');
	var pGitLogo = $('#pGitLogo' + ID);

	pGitLogo
		.css("width", "25px")
		.css("height", "25px")
		.css("position", "absolute")
		.css("bottom", "30px")
		.css("left", "35px")
		.css("cursor", "pointer")
		.on("click", function(){
				window.open(project.github , '_blank' );
			})
		;

	pPanelsCounter++;
}

var skillsCounter = 0;

function drawSkills(targetArray, ID){
	var positionTop, positionLeft;

	positionTop = (40 * skillsCounter);

	infoSection.append('<div class="aCTitles" id="skillsTitleContainer' + skillsCounter + '"></div>')
	skillsTitleContainer = $('#skillsTitleContainer' + skillsCounter);

	skillsTitleContainer
		.css("left", "75px")
		.css("top", positionTop + "px")
		;

	skillsTitleContainer.append('<h3 id="skillsTitle' + skillsCounter + '" >' + ID + '<h3>');

	for(var i = 0; i < targetArray.length; i++){
		positionLeft = (i == 0) ? 300 : $('#skillsContainer' + ID + (i - 1)).position().left + $('#skillsContainer' + ID + (i - 1)).width() + 30;

		infoSection.append('<div class="aCText" id="skillsContainer' + ID + i + '"></div>');
		skillsContainer = $('#skillsContainer' + ID + i);
		skillsContainer			
			.css("top", positionTop + "px")
			.css("left", positionLeft + "px")
			;

		skillsContainer.append('<h4 id="skills' + ID + i + '">' + targetArray[i] + '</h4>');
	}

	skillsCounter++;

}

var expCounter = 0;

function drawExperience(targetArray, ID, text){
	var positionTop, positionLeft;

	positionTop = 280 + (40 * expCounter);

	infoSection.append('<div class="aCTitles" id="expTitleContainer' + expCounter + '"></div>')
	expTitleContainer = $('#expTitleContainer' + expCounter);

	expTitleContainer
		.css("left", "75px")
		.css("top", positionTop + "px")
		;

	expTitleContainer.append('<h3 id="expTitle' + expCounter + '" >' + text + '<h3>');

	for(var i = 0; i < targetArray.length; i++){
		positionLeft = (i == 0) ? 300 : $('#expContainer' + ID + (i - 1)).position().left + $('#expContainer' + ID + (i - 1)).width() + 30;

		infoSection.append('<div class="aCText" id="expContainer' + ID + i + '"></div>');
		expContainer = $('#expContainer' + ID + i);
		expContainer			
			.css("top", positionTop + "px")
			.css("left", positionLeft + "px")
			;

		expContainer.append('<h4 id="exp' + ID + i + '">' + targetArray[i] + '</h4>');
	}

	expCounter++;

}

function drawModal(project){
	body.append('<div class="projectModalBG" id="pModalBG' + project.ID + '"></div>');
	var pModalBG = $('#pModalBG' + project.ID);

	pModalBG
		.on('click', function(){
			$(this).remove();
			pModal.remove();
		})
		.css("z-index", 3)
		;

	body.append('<div class="projectModal" id="pModal' + project.ID + '"></div>');
	pModal = $('#pModal' + project.ID);

	pModal.css("z-index", 4);

	pModal.append('<h5 id="modalTitle' + project.ID + '">' + project.title + '</h5>');
	var modalTitle = $('#modalTitle' + project.ID);
	modalTitle
		.css("color", "#323232")
		.css("font-size", "150%")
		.css("letter-spacing", "1px")
		;

	//drawCarousel();

}

function drawCarousel(){
	pModal.append('<div id="carouselContainer"></div>')
	var carouselContainer = $('#carouselContainer');

	carouselContainer
		.css("width", "450px")
		.css("height", "280px")
		.css("background-color", "white")
		.css("border-radius", "3px")
		;

	carouselContainer.append('<div id="first"></div>');
	var first = $('#first');
	first
		.css("width", "440px")
		.css("height", "270px")
		.css("position", "absolute")
		.css("top", "5px")
		.css("left", "5px")
		.css("border-radius", "3px")
		.css("background", "url(images/cherrypicker-mockup.jpg) no-repeat")
		.css("background-size", "cover")
		;

	// carouselContainer.append('<div>Lol</div>');
	// carouselContainer.append('<div>asdf</div>');
	// carouselContainer.append('<div>Hadsfljno</div>');

	$('#carouselContainer').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
  	});
}