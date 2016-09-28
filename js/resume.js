function showResumePage(){
	resumeContainer.show();
	currentPage = resumeContainer;
	changeURL("#resume");

}

function drawResumePage(){
	resumeContainer.append('<h1 id="resumeTitle">Laurence Li</h1>');

	var resumeTitle = $("#resumeTitle");
	resumeTitle
		.css("color", "#48e59f")
		.css("position", "absolute")
		.css("top", "20px")
		.css("left", "120px")
		.css("letter-spacing", "2px");

}