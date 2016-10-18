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

var cherrypickerModallInfo = {
	modalSub: "Basketball Statistics Visualization",
	date: "Live (but development ongoing)",
	role: "Full Stack",
	collabs: ["Laurence Li", "Victor Thibert" ],
	collabsLinks: ["laurenceli", "VictorThibert"],
	tech: ["JavaScript", "jQuery", "D3", "HTML", "CSS", "PHP"],
	description: "We take confusing NBA statistics data and visualize it into something fun, interesting and accessible."
}

var FriendmapModallInfo = {
	modalSub: "Reviews on a Map",
	date: "Development ongoing",
	role: "Front-End",
	collabs: ["Laurence Li", "Victor Thibert", "Ahmed Khan", "Brandon Baksh" ],
	collabsLinks: ["laurenceli", "VictorThibert", "AhmedAKhan", "bbaksh"],
	tech: ["JavaScript", "React Native", "Objective-C", "Python", "Java"],
	description: "Tag and review places you've been. Follow your friends to see where they've been and what they recommend."
}

var links = ["laurenceli", "VictorThibert"];

var cherrypicker = {
	ID: "Cherrypicker",
	title: "CHERRYPICKER.IO", 
	subtitle: "Web Application", 
	hasLink: true,
	link: "http://cherrypicker.io", 
	image: "images/cherrypicker-mockup.jpg",
	github: "https://github.com/VictorThibert/cherrypicker.io", 
	modalInfo: cherrypickerModallInfo
};

var friendmap = {
	ID: "Friendmap",
	title: "FRIENDMAP", 
	subtitle: "Mobile Application", 
	hasLink: false,
	link: "", 
	image: "images/friendmap-mockup.jpg",
	github: "https://github.com/VictorThibert/friendmap",
	modalInfo: FriendmapModallInfo
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

	boldTitle("skills");
	boldTitle("exp");

}

function boldTitle(id){
	$('#' + id + 'Title0').addClass('aCTitleBold');
}

function drawProjectPanel(project, ID, hasLink){
	mainContainer.append('<div class="projectImage image" id="pImage' + ID + '"></div>');
	pPanelsArray[pPanelsCounter] = $('#pImage' + ID);

	pPanelsArray[pPanelsCounter]
		.css("position", "relative")
		.css("float", "left")
		.css("height", "450px")
		.css("width", "50%")
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

	pPanel.append('<h5 class="clickableLink" id="pLabel' + ID + '">' + project.title + '</h5>');
	var pLabel = $('#pLabel' + ID);

	pLabel
		.css("position", "relative")
		.css("display", "inline-block")
		.css("margin", "0px")
		.css("padding", "0px")
		.css("color", "#FFFFFF")
		.css("top", "45%")
		.css("transform", "translateY(-50%)")
		.css("cursor", "pointer")
		.on('click', function(){
			drawModal(project);
			$("body").css("overflow", "hidden");
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
			.css("letter-spacing", "1px")
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
			$("body").css("overflow", "auto");
		})
		.css("z-index", 3)
		;

	body.append('<div class="projectModal" id="pModal' + project.ID + '"></div>');
	pModal = $('#pModal' + project.ID);

	pModal.css("z-index", 4);

	pModal.append('<h5 id="modalTitle' + project.ID + '">' + project.title + '</h5>');
	var modalTitle = $('#modalTitle' + project.ID);
	modalTitle
		.css("color", "#48e59f")
		.css("font-size", "150%")
		.css("letter-spacing", "1px")
		.css("margin", "0px")
		;

	pModal.append('<h5 id="modalSubtitle' + project.ID + '">' + project.modalInfo.modalSub + ' // ' + project.subtitle + '</h5>');
	var modalSubtitle = $('#modalSubtitle' + project.ID);
	modalSubtitle
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin-top", "5px")
		;

	pModal.append('<div id="mInfoContainer' + project.ID + '"></div>');
	var mInfoContainer = $('#mInfoContainer' + project.ID);
	mInfoContainer
		.css("width", "100%")
		.css("height", "50%")
		.css("position", "absolute")
		.css("top", "110px")
		.css("left", "0px")
		.css("padding-left", "30px")
		.css("padding-right", "30px")
		.css("text-align", "left")
		.css("box-sizing", "border-box")
		;

	var lowestCollab = 0;
	var collabTop = 0;

	mInfoContainer.append('<h5 id="collabs' + project.ID + '">Collaborators </h5>');
	var collabs = $('#collabs' + project.ID);
	collabs
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin", "0px")
		;

	for(var i = 0; i < project.modalInfo.collabs.length; i++){
		collabTop = collabs.position().top - 2 + (22 * i);

		mInfoContainer.append('<h4  class="clickableLink collabSubtitle" id="' + project.modalInfo.collabsLinks[i] + '">' + project.modalInfo.collabs[i] + '</h4>');
		var collabsSub = $('#' + project.modalInfo.collabsLinks[i]);

		collabsSub		
		.css("margin", "0px")
		.css("position", "absolute")
		.css("top", collabs.position().top - 2 + (22 * i) + "px")
		.css("left", "150px")
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.on('click', function(){
			window.open("https://github.com/" + ($(this).attr('id')) + "", '_blank' );
		})
		;
	}

	lowestCollab = collabTop;

	var lowestTech = 0;
	var techTop = 0;

	mInfoContainer.append('<h5 id="tech' + project.ID + '">Technologies Used </h5>');
	var tech = $('#tech' + project.ID);
	tech
		.css("position", "absolute")
		.css("top", collabs.position().top + "px")
		.css("left", "310px")
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin", "0px")
		;

	for(var i = 0; i < project.modalInfo.tech.length; i++){
		techTop = collabs.position().top - 2 + (22 * i);
		mInfoContainer.append('<h4 id="techSub' + project.ID + i + '">' + project.modalInfo.tech[i] + '</h4>');
		var techList = $('#techSub' + project.ID + i );

		techList		
		.css("margin", "0px")
		.css("position", "absolute")
		.css("top", collabs.position().top - 2 + (22 * i) + "px")
		.css("left", "470px")
		.css("color", "#999999")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		;
	}

	lowestTech = techTop;

	var nextTop = (lowestCollab > lowestTech) ? lowestCollab : lowestTech;

	mInfoContainer.append('<h5 id="descriptionTitle' + project.ID + '">Description </h5>');
	var descriptionTitle = $('#descriptionTitle' + project.ID);
	descriptionTitle
		.css("position", "absolute")
		.css("top", nextTop + 50 + "px")
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin", "0px")
		;

	mInfoContainer.append('<div id="description' + project.ID + '">' + project.modalInfo.description + '</div>');
	var description = $('#description' + project.ID );

	description		
	.css("margin-right", "30px")
	.css("position", "absolute")
	.css("top", nextTop + 48 + "px")
	.css("left", "150px")
	.css("font-family", "Hind, sans-serif")
	.css("color", "#999999")
	.css("font-size", "80%")
	.css("letter-spacing", "1px")
	;

	nextTop = description.position().top;

	mInfoContainer.append('<h5 id="progressTitle' + project.ID + '">Status </h5>');
	var progressTitle = $('#progressTitle' + project.ID);
	progressTitle
		.css("position", "absolute")
		.css("top", nextTop + 65 + "px")
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin", "0px")
		;


	mInfoContainer.append('<h4 id="progress' + project.ID + '">' + project.modalInfo.date + '</h4>');
	var progress = $('#progress' + project.ID);

	progress		
	.css("margin", "0px")
	.css("position", "absolute")
	.css("top", nextTop + 63 + "px")
	.css("left", "150px")
	.css("color", "#999999")
	.css("font-size", "80%")
	.css("letter-spacing", "1px")
	;

	mInfoContainer.append('<h5 id="roleTitle' + project.ID + '">My Role </h5>');
	var roleTitle = $('#roleTitle' + project.ID);
	roleTitle
		.css("position", "absolute")
		.css("top", nextTop + 106 + "px")
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin", "0px")
		;


	mInfoContainer.append('<h4 id="role' + project.ID + '">' + project.modalInfo.role + '</h4>');
	var role = $('#role' + project.ID);

	role		
	.css("margin", "0px")
	.css("position", "absolute")
	.css("top", nextTop + 104 + "px")
	.css("left", "150px")
	.css("color", "#999999")
	.css("font-size", "80%")
	.css("letter-spacing", "1px")
	;

	pModal.append('<h5 id="modalLinksTitle' + project.ID + '">Check it out!</h5>');
	var modalLinksTitle = $('#modalLinksTitle' + project.ID);
	modalLinksTitle
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin-top", "55%")
		;

	pModal.append('<h4 class="clickableLink" id="modalGithub' + project.ID + '">Github</h4>');
	var modalGithub = $('#modalGithub' + project.ID);
	modalGithub
		.css("display", "inline-block")
		.css("color", "#323232")
		.css("font-size", "80%")
		.css("letter-spacing", "1px")
		.css("margin-right", "0px")
		.on('click', function(){
			window.open(project.github, '_blank' );
		})
		;

	if(project.hasLink){
		modalGithub.css("margin-right", "15px");

		pModal.append('<h4 class="clickableLink" id="modalLink' + project.ID + '">Live Website</h4>');
		var modalLink = $('#modalLink' + project.ID);
		modalLink
			.css("display", "inline-block")
			.css("color", "#323232")
			.css("font-size", "80%")
			.css("letter-spacing", "1px")
			.css("margin-left", "15px")
			.on('click', function(){
				window.open(project.link, '_blank' );
			})
			;
	}
}