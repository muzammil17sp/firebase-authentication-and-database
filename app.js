function signup() {
   var firstname = document.getElementById("firstname").value
   var lastname = document.getElementById("lastname").value
   var signupemail = document.getElementById("signupemail").value
   var username = document.getElementById("username").value
   var signuppassword = document.getElementById("signuppassword").value
var sign_up = {
    firstname,
    lastname,
    signupemail,
    username,
    signuppassword
}
firebase.auth().createUserWithEmailAndPassword(sign_up.signupemail, sign_up.signuppassword)
.then(function (kamiyab) {
    console.log(kamiyab.user.uid)
    var uid = kamiyab.user.uid
    sign_up.uid = uid 
    firebase.database().ref('/').child(`user/${uid}`).set(sign_up)
alert("Now login To Your Account")
  

})
.catch(function(error) {
   
   alert( error.message)
 
  })
}
function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
 var LOGIN ={
     email,
     password
 }
 firebase.auth().signInWithEmailAndPassword(LOGIN.email,LOGIN.password)
        .then(function (success) {
            console.log(success)
            window.location.href="./profile.html"
            // var uid = success.user.uid
            // firebase.database().ref('/').child(`user/${uid}`).on('value',function(data){
            //     console.log(data.val())
            })
           
            .catch(function (error) {
               alert(error)
            })
}
function data() {
    firebase.database().ref('/').child('user/QOQigq1t8TQeRMNzHZMty0vpziP2').on('value',function(data){
        console.log(data.val())
    })
}