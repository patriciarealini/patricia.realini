//main.js

$(document).ready(function() {
// hover effect for bottom link buttons
 	$('.twitter').hover(
 		function() {
 			$('.twitterFooterLink').remove();
 			var twitterHover = $('<a href="http://www.twitter.com/patriciarealini" class="twitterFooterHover"><img src="images/TwitterMark2.png" alt="Twitter" /></a>');
 			$(this).append(twitterHover);
 			$(this).unbind('mouseenter mouseleave');
 		},
 		function() {
  			$('.twitterFooterHover').remove();
 			var twitter = $('<a href="http://www.twitter.com/patriciarealini" class="twitterFooterLink"><img src="images/TwitterMark.png" alt="Twitter" /></a>');
 			$(this).append(twitter);
 			$(this).unbind('mouseenter mouseleave');
 		}
 	);
});

//<img src="images/GitHubMark2.png" class="footerhover" alt="GitHub" />
//<img src="images/LinkedInMark2.png" class="footerhover" alt="LinkedIn" />

// 	$('#twitter').mouseout(function() {
// 		$(this.attr("class", "twitterbefore"))
// 	});
// 	$('#github').mouseover(function() {
// 		$(this.attr("class", "githubafter"))
// 	});
// 	$('#github').mouseout(function() {
// 		$(this.attr("class", "githubbefore"))
// 	});
// 	$('#linkedin').mouseover(function() {
// 		$(this.attr("class", "linkedinafter"))
// 	});
// 	$('#linkedin').mouseout(function() {
// 		$(this.attr("class", "linkedinbefore"))
// 	});
