var infoSection;
var programmingSkills;
var skillsTitleContainer;

var programmingArray = ["JavaScript", "Java"];
var webArray = ["HTML/CSS", "jQuery", "React", "SASS", "D3"];
var mobileArray = ["React Native"];
var infraArray = [""];
var otherArray = ["Git/Github", "Windows", "MacOS", "Linux", "Adobe Creative Suite"];
var languageArray = ["English", "French"];

function showMainPage(){
	mainContainer.show();
	currentPage = mainContainer;
	changeURL("#about");

}


$( window ).resize(function() {
	mainContainer.css("height", "100%");
})


function drawMainPage(){

mainContainer.append('<div id="workPanel1"></div>')

var workPanel1 = $('#workPanel1');

workPanel1
	.css("position", "relative")
	.css("float", "left")
	.css("height", "450px")
	.css("width", "50%")
;

mainContainer.append('<div id="workPanel2"></div>')
var workPanel2 = $('#workPanel2');

workPanel2
	.css("position", "relative")
	.css("float", "left")
	.css("height", "450px")
	.css("width", "50%")
;


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
					backgroundColor: "#48e59f"
				}, 300)
				.toggleClass('expanded');;

			isExpanded = false;
		}
	});

	expandButton.append('<span></span>');
	expandButton.append('<span></span>');

	mainContainer.append('<div id="infoSection"></div>')
	infoSection = $('#infoSection');

	infoSection
		.css("width", "100%")
		.css("height", "200px")
		.css("position", "absolute")
		.css("top", "650px")
		.css("left", "0px")
		.css("background-color", "#f7f7f7")
		;


	// infoSection.append('<h3 id="programmingSkills">Programming<h3>');

	// programmingSkills = $('#programmingSkills');

	// programmingSkills
	// 	.css("position", "absolute")
	// 	.css("top", "30px")
	// 	.css("left", "120px")
	// 	.css("color", "#8AB0AB");

	drawSkills(programmingArray, "Programming");
	drawSkills(webArray, "Web");
	drawSkills(mobileArray, "Mobile");
	drawSkills(otherArray, "Other");
	drawSkills(languageArray, "Language");

}

var skillsCounter = 0;

function drawSkills(targetArray, ID){
	var positionTop = 0;
	var positionLeft = 0;
	var stringLength = 0;

	positionTop = 37 + (50 * skillsCounter);
	infoSection.append('<div id="skillsTitleContainer' + skillsCounter + '"></div>')
	skillsTitleContainer = $('#skillsTitleContainer' + skillsCounter);

	skillsTitleContainer
		.css("width", "200px")
		.css("height", "50px")
		.css("position", "absolute")
		.css("top", positionTop + "px")
		.css("left", "95px")
		.css("color", "#8AB0AB")
		.css("text-align", "right")
		;

	skillsTitleContainer.append('<h3 id="skillsTitle' + skillsCounter + '" >' + ID + '<h3>');
	// skillsTitle = $('#skillsTitle' + skillsCounter);

	// skillsTitle
	// 	.css("position", "absolute")
	// 	.css("top", positionTop + "px")
	// 	.css("left", "120px")
	// 	.css("color", "#8AB0AB");

	for(var i = 0; i < targetArray.length; i++){
		if(i == 0){
			stringLength = 0;
		}
		else{
			stringLength = getStringLength(targetArray[i-1]);
		}
		positionLeft = 330 + ((120 + stringLength) * (i));
		infoSection.append('<h4 id="skills' + ID + i + '">' + targetArray[i] + '</h4>');
		$('#skills' + ID + i)
			.css("overflow", "visible")
			.css("position", "absolute")
			.css("top", positionTop + 5 + "px")
			.css("left", positionLeft + "px")
			;
	}

	skillsCounter++;

}

function getStringLength(string){
	return string.length * 3;
}