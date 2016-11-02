var infoSection;
var programmingSkills;
var skillsTitleContainer;
var skillsContainer;
var pModal;
var skillsArray = [];
var projectsArray = [];
var educationArray = [];
var pBolded = false;
var lBolded = false;

var dls1Array = ["Junior Developer (May 2016 - August 2016)"];
var dls2Array = ["Technical Support Coordinator (May 2014 - August 2014)"];
var emptyArray = [""];

var pPanelsArray = [];
var pPanelsCounter = 0;

var xmlhttp = new XMLHttpRequest();
var url = "js/aboutData.json";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        assignArrays(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function assignArrays(arr) {
	skillsArray = arr.skills;
	experienceArray = arr.experience;
	projectsArray = arr.projects;
	educationArray = arr.education;
}

$( window ).resize(function() {
	mainContainer.css("height", "100%");
})

function showMainPage(){
	mainContainer.show();
	currentPage = mainContainer;
	changeURL("#about");
}

function drawMainPage(){
	drawProjectPanel(projectsArray[0], "Cherrypicker");
	drawProjectPanel(projectsArray[1], "FriendMap");

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
		.css("z-index", 10)
		.css("height", "100%")
		.css("width", "700px")
		;

	bannerTitlesContainer.append('<h1 id="bannerTitle">LAURENCE LI</h1>')
	var bannerTitle = $('#bannerTitle');

	bannerTitle.addClass("bannerElement").css("top", "42px").css("left", "37px");//.css("color", "#8AB0AB");

	bannerTitlesContainer.append('<h4 id="bannerSubtitle">Student // University of Ottawa // Computer Science</h4>')
	var bannerSubtitle = $('#bannerSubtitle')

	bannerSubtitle.addClass("bannerElement").css("top", "115px").css("left", "43px");//.css("color", "#323232");

	mainContainer.append('<div id="infoSection"></div>')
	infoSection = $('#infoSection');

	infoSection
		.css("width", "100%")
		.css("height", "400px")
		.css("position", "absolute")
		.css("top", "650px")
		.css("left", "0px")
		;

	drawSkills(skillsArray[5].filters, skillsArray[5].title);
	drawSkills(skillsArray[0].programming, skillsArray[0].title)
	drawSkills(skillsArray[1].web, skillsArray[1].title);
	drawSkills(skillsArray[2].mobile, skillsArray[2].title);
	drawSkills(skillsArray[3].other, skillsArray[3].title);
	drawSkills(skillsArray[4].language, skillsArray[4].title);

	drawEducation(emptyArray, "EDUCATION", "EDUCATION");
	drawEducation(educationArray[1], "uottawa", "University of Ottawa");
	drawEducation(educationArray[0], "uwo", "University of Waterloo");

	drawExperience(emptyArray, "EXPERIENCE", "EXPERIENCE");
	drawExperience(experienceArray[0], "DLS1", "DLS Technology");
	drawExperience(experienceArray[1], "DLS2", "DLS Technology");

	boldTitle("education");
	boldTitle("skills");
	boldTitle("exp");

	setFilters("skillsSKILLS0", 0);
	setFilters("skillsSKILLS1", 10);
}

function setFilters(id, filter){
	$('#' + id)
		.addClass('filterButton')
		.on('click', function(){
			$(this).toggleClass('clicked');
			toggleSkillsBold(getSkillsByLevel(filter));
		});
}

function getSkillsByLevel(level){
	return document.getElementsByClassName(level);
}

function toggleSkillsBold(skills, status){
	//(status) ? 300
	for(var i = 0; i < skills.length; i++){
		$(skills[i]).toggleClass('skillBolded');
	}
}

function boldTitle(id){
	$('#' + id + 'Title0').addClass('aCTitleBold');
}

function drawProjectPanel(project, ID){
	// init project image
	mainContainer.append('<div class="projectImage image" id="pImage' + ID + '"></div>'); 
	pPanelsArray[pPanelsCounter] = $('#pImage' + ID);

	pPanelsArray[pPanelsCounter]
		.css("background", "url(" + project.image + ") no-repeat")
		.css("background-size", "cover");

	// init project overlay, hover functionality in css
	pPanelsArray[pPanelsCounter].append('<div class="projectPanel" id="pPanel' + ID +'"></div>');
	pPanel = $('#pPanel' + ID);

	pPanel
		.css("background-color", "rgba(0,0,0,0.4)")
	;

	// init project name text, hover functionality in css
	pPanel.append('<h1 class="clickableLink projectTitle" id="pLabel' + ID + '">' + project.title + '</h1>');
	var pLabel = $('#pLabel' + ID);

	pLabel
		.on('click', function(){
			drawModal(project);
			$("#mainContainer").css("overflow-y", "hidden");
		});

	// init project subtitle text
	pPanel.append('<h5 class="projectSubtitle" id="pSubtitle' + ID + '">' + project.subtitle + '</h5>');
	var pSubtitle = $('#pSubtitle' + ID);

	// init link button
	if(project.hasLink){
		pPanel.append('<div class="projectIcon linkIcon" id="pLinkIcon' + ID + '"></div>');
		var pLinkIcon = $('#pLinkIcon' + ID);

		pLinkIcon
			.on("click", function(){
				window.open(project.link , '_blank' );
			});
	}

	// init github button
	pPanel.append('<div class="projectIcon githubIcon" id="pGitLogo' + ID + '"></div>');
	var pGitLogo = $('#pGitLogo' + ID);

	pGitLogo
		.on("click", function(){
				window.open(project.github , '_blank' );
			})
		;

	pPanelsCounter++;
}

var educationCounter = 0;
var educationContainer;
var educationTitleContainer;
var educationSubtitleContainer;

function drawEducation(targetArray, ID, text){
	var positionTop, positionLeft;

	positionTop = (educationCounter > 1) ? (50 * educationCounter) : (40 * educationCounter);

	infoSection.append('<div class="aCTitles" id="educationTitleContainer' + educationCounter + '"></div>')
	educationTitleContainer = $('#educationTitleContainer' + educationCounter);
	educationTitleContainer
		.css("left", "150px")
		.css("top", positionTop + "px")
		;

	educationTitleContainer.append('<h3 id="educationTitle' + educationCounter + '" >' + text + '<h3>');

	if(educationCounter != 0){
		educationSubtitleContainer = $('#educationSubtitleContainer' + educationCounter);
		educationSubtitleContainer
			.css("left", "150px")
			.css("top", positionTop + 30 + "px")
			;
		educationTitleContainer.append('<h3 id="educationSubtitle' + educationCounter + '" >' + targetArray.startDate + ' - ' + targetArray.endDate + '<h3>');
		$('#educationSubtitle' + educationCounter).css("font-size", "60%").css("color", "#a1bfbb");

		infoSection.append('<div class="aCText" id="educationContainer' + ID + '"></div>');
		educationContainer = $('#educationContainer' + ID);
		educationContainer			
			.css("top", positionTop + "px")
			.css("left", "400px")
			;

		educationContainer.append('<h4 id="education' + ID + '">' + targetArray.program + '</h4>');
	}
	educationCounter++;
}

var skillsCounter = 0;

function drawSkills(targetArray, ID){
	var positionTop, positionLeft;

	positionTop = 190 + (40 * skillsCounter);

	infoSection.append('<div class="aCTitles" id="skillsTitleContainer' + skillsCounter + '"></div>')
	skillsTitleContainer = $('#skillsTitleContainer' + skillsCounter);

	skillsTitleContainer
		.css("left", "150px")
		.css("top", positionTop + "px")
		;

	skillsTitleContainer.append('<h3 id="skillsTitle' + skillsCounter + '" >' + ID + '<h3>');

	for(var i = 0; i < targetArray.length; i++){
		positionLeft = (i == 0) ? 400 : $('#skillsContainer' + ID + (i - 1)).position().left + $('#skillsContainer' + ID + (i - 1)).width() + 30;

		infoSection.append('<div class="aCText" id="skillsContainer' + ID + i + '"></div>');
		skillsContainer = $('#skillsContainer' + ID + i);
		skillsContainer			
			.css("top", positionTop + "px")
			.css("left", positionLeft + "px")
			;

		skillsContainer.append('<h4 class="' + targetArray[i].level + '" id="skills' + ID + i + '">' + targetArray[i].text + '</h4>');
	}
	skillsCounter++;
}

var expCounter = 0;
var expSubtitleContainer;

function drawExperience(targetArray, ID, text){
	var positionTop, positionLeft;

	positionTop = (expCounter > 1) ? 470 + (50 * expCounter) : 470 + (40 * expCounter);

	infoSection.append('<div class="aCTitles" id="expTitleContainer' + expCounter + '"></div>')
	expTitleContainer = $('#expTitleContainer' + expCounter);

	expTitleContainer
		.css("left", "150px")
		.css("top", positionTop + "px")
		;
	expTitleContainer.append('<h3 id="expTitle' + expCounter + '" >' + text + '<h3>');

	if(expCounter != 0){
		expTitleContainer.append('<h3 id="expSubtitleContainer' + expCounter + '" >' + targetArray.startDate + ' - ' + targetArray.endDate + '<h3>');
		$('#expSubtitleContainer' + expCounter).css("font-size", "60%").css("color", "#a1bfbb");

		expSubtitleContainer = $('#expSubtitleContainer' + expCounter);
		expSubtitleContainer
			.css("left", "150px")
			.css("top", positionTop + 30 + "px")
			;

		infoSection.append('<div class="aCText" id="expContainer' + ID + '"></div>');
		expContainer = $('#expContainer' + ID);
		expContainer			
			.css("top", positionTop + "px")
			.css("left", "400px")
			.css("letter-spacing", "1px")
			;

		expContainer.append('<h4 id="exp' + ID + '">' + targetArray.position + '</h4>');
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
			$("mainContainer").css("overflow-y", "auto");
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