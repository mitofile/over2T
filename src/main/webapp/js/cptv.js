var userLogged = false;
var redirectPage = undefined;
$('.carousel').carousel({
	interval : 5000
})

$(document).ready(
		function() {

			if (getUserLogged()){
				$('#iconOff').removeClass("logOffInactive").addClass("logOffActive");
				$('#userNameItem').html(" " + getUserLogged());
			}
			
			function saveLocalStore(targetValue){
				localStorage.userLogged = targetValue;
				$('#iconOff').removeClass("logOffInactive").addClass("logOffActive");
			}
			
			function getUserLogged(){
				return localStorage.userLogged;
			}
			
			function logOff(){
				$('#iconOff').removeClass("logOffActive").addClass("logOffInactive");
				$('#userNameItem').html("");
				localStorage.removeItem('userLogged');
			}
			
			function showModal() {
				if (!localStorage.userLogged) {
					$('#loginModal').modal("show");
				} else {
					$('#iconOff').removeClass("logOffInactive").addClass("logOffActive");
					$('#userNameItem').html(" " + getUserLogged());
					goToPage();
				}
			}

			function validateUser() {
				if ($('#login_username').val() == "admin"
						&& $('#password').val() == "admin") {
					$('#loginModal').modal("hide");
					saveLocalStore($('#login_username').val());
					$('#userNameItem').html(" " + getUserLogged());
					$('#iconOff').removeClass("logOffInactive").addClass("logOffActive");
					goToPage();
				} else {
					$('#login_fail').show();
				}
			}
			
			function goToPage(){
				var originPage = window.location.href;
				if(originPage.indexOf("index.html")>0){
					originPage = originPage.replace("index.html", "");
				}
				window.location.href = originPage + redirectPage;
			}

			$('#iconOff').click(function() {
				logOff();
			});
			
			$(".posterLink").click(function() {
				redirectPage = $(this).attr('data');
				showModal(redirectPage);
			});

			$("#login_username").click(function() {
				$('#login_fail').hide();
			});

			$("#myBtn").click(function() {
				$("#myModal").modal();
			});

			$('#login_btn').click(function() {
				validateUser();
			});

			$(document).on('click', '.signup-tab', function(e) {
				e.preventDefault();
				$('#signup-taba').tab('show');
			});

			$(document).on('click', '.signin-tab', function(e) {
				e.preventDefault();
				$('#signin-taba').tab('show');
			});

			$(document).on('click', '.forgetpass-tab', function(e) {
				e.preventDefault();
				$('#forgetpass-taba').tab('show');
			});
		});