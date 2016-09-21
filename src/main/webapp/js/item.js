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
			
			function logOff() {
				$('#iconOff').removeClass("logOffActive").addClass("logOffInactive");
				$('#userNameItem').html("");
				localStorage.removeItem('userLogged');
				window.location.href = window.location.origin
						+ window.location.pathname.substring(
								window.location.pathname.lastIndexOf("/"), 0);
			}

			$('#iconOff').click(function() {
				logOff();
			});
			
		});