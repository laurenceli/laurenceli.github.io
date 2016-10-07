var infoSection;
var programmingSkills;
var skillsTitleContainer;
var skillsContainer;

var programmingArray = ["JavaScript", "Java"];
var webArray = ["HTML/CSS", "jQuery", "React", "D3", "SASS"];
var mobileArray = ["React Native"];
var infraArray = [""];
var otherArray = ["Git/Github",  "Adobe Creative Suite", "Windows", "MacOS", "Linux"];
var languageArray = ["English", "French"];

var cherrypicker = {
	title: "Cherrypicker.io", 
	subtitle: "Web Application", 
	link: "http://cherrypicker.io", 
	image: "images/cherrypicker-mockup.jpg" 
};

var friendmap = {
	title: "Friendmap", 
	subtitle: "Mobile Application", 
	link: "https://github.com/VictorThibert/friendmap", 
	image: "images/friendmap-mockup.jpg" 
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

	drawProjectPanel(projectInfo[0], "Cherrypicker");
	drawProjectPanel(projectInfo[1], "FriendMap");

	mainContainer.append('<div id="centerBanner"></div>')
	var centerBanner = $('#centerBanner');

	centerBanner
		.css("width", "100%")
		.css("height", "200px")
		.css("position", "relative")
		.css("top", "450px")
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

	bannerTitle.addClass("bannerElement").css("top", "42px").css("left", "40px").css("color", "#fff");

	bannerTitlesContainer.append('<h2 id="bannerSubtitle">Student // University of Ottawa, Computer Science</h2>')
	var bannerSubtitle = $('#bannerSubtitle')

	bannerSubtitle.addClass("bannerElement").css("top", "110px").css("left", "43px").css("color", "#fff");

	mainContainer.append('<div id="infoSection"></div>')
	infoSection = $('#infoSection');

	infoSection
		.css("width", "100%")
		.css("height", "300px")
		.css("position", "absolute")
		.css("top", "650px")
		.css("left", "0px")
		.css("background-color", "#f7f7f7")
		;

	drawSkills(programmingArray, "PROGRAMMING");
	drawSkills(webArray, "WEB");
	drawSkills(mobileArray, "MOBILE");
	drawSkills(otherArray, "OTHER");
	drawSkills(languageArray, "LANGUAGE");

}

function drawProjectPanel(project, ID){
	mainContainer.append('<div class="projectImage" id="pImage' + ID + '"></div>');
	pPanelsArray[pPanelsCounter] = $('#pImage' + ID);

	pPanelsArray[pPanelsCounter]
		.css("position", "relative")
		.css("float", "left")
		.css("height", "450px")
		.css("width", "50%")
		.css("background", "url(" + project.image + ") no-repeat")
		.css("background-size", "cover")
		;

	mainContainer.append('<div class="projectPanel" id="pPanel' + ID +'"></div>');
	pPanel = $('#pPanel' + ID);

	pPanel
		.css("position", "absolute")
		.css("left", pPanelsArray[pPanelsCounter].position().left + "px")
		.css("top", "0px")
		.css("height", "450px")
		.css("background-color", "rgba(255,255,255,0.3)")
		.css("width", "50%")
	;

	pPanel.append('<div class=projectPanelBanner id="pPanelBanner' + ID + '"><div>');

	var pPanelBanner = $('#pPanelBanner' + ID);
	pPanelBanner
		.css("width", "100%")
		.css("height", "70px")
		.css("position", "absolute")
		.css("left", "0px")
		.css("bottom", "0px")
		.css("background-color", "rgba(255,255,255,0.6)")
		;

	pPanelBanner.append('<h2 id="pLabel' + ID + '">' + project.title + ' // ' + project.subtitle + '</h2>');
	var pLabel = $('#pLabel' + ID);

	pLabel
		.css("position", "absolute")
		.css("top", "12px")
		.css("left", "30px")
		.css("color", "#323232")
		;

	pPanelBanner.append('<div class="linkIcon" id="pLinkIcon' + ID + '"></div>');
	var pLinkIcon = $('#pLinkIcon' + ID);

	pLinkIcon
		.css("width", "15px")
		.css("height", "15px")
		.css("position", "absolute")
		.css("top", "28px")
		.css("right", "80px")
		.css("cursor", "pointer")
		.on("click", function(){
				window.open(project.link , '_blank' );
			})
		;

	pPanelsCounter++;
}

var skillsCounter = 0;

function drawSkills(targetArray, ID){
	var positionTop, positionLeft;

	positionTop = 35 + (50 * skillsCounter);

	infoSection.append('<div class="aCTitles" id="skillsTitleContainer' + skillsCounter + '"></div>')
	skillsTitleContainer = $('#skillsTitleContainer' + skillsCounter);

	skillsTitleContainer
		.css("left", "55px")
		.css("top", positionTop + "px")
		;

	skillsTitleContainer.append('<h3 id="skillsTitle' + skillsCounter + '" >' + ID + '<h3>');

	for(var i = 0; i < targetArray.length; i++){
		positionLeft = (i == 0) ? 280 : $('#skillsContainer' + ID + (i - 1)).position().left + $('#skillsContainer' + ID + (i - 1)).width() + 30;

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