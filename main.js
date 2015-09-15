//main.js

//hover effect for bottom link buttons
$(document).ready(function() {
	$('#twitter').mouseover(function() {
		$(this.attr("class", "twitterafter"))
	});
	$('#twitter').mouseout(function() {
		$(this.attr("class", "twitterbefore"))
	});
	$('#github').mouseover(function() {
		$(this.attr("class", "githubafter"))
	});
	$('#github').mouseout(function() {
		$(this.attr("class", "githubbefore"))
	});
	$('#linkedin').mouseover(function() {
		$(this.attr("class", "linkedinafter"))
	});
	$('#linkedin').mouseout(function() {
		$(this.attr("class", "linkedinbefore"))
	});
});