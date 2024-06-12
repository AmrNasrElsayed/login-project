//sign up
var signUpName=document.getElementById('SignUpName');
var signUpEmail=document.getElementById('SignUpEmail');
var signUpPass=document.getElementById('SignUpPassword');
var signUpButton=document.getElementById('SignUpBtn')
var emailExist=document.getElementById('emailExist')
var users = [];
if (localStorage.getItem('usersInfo')!= null){
    users=JSON.parse(localStorage.getItem('usersInfo'))
}
function signUp(){
   
if(signUpName.value == ' '||signUpEmail.value == '' || signUpPass.value ==''){
    emailExist.innerHTML = `<span class="text-danger my-3">All Inputs Are Required<span>`
}else{
    for (var i=0 ; i<users.length ; i++){
        if(users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
            emailExist.innerHTML = `<span class="text-danger my-3">Email already exist<span>`
            return false
        }
    }
    emailExist.innerHTML = `<span class="text-success my-3">Success<span>`
    getUserData()
}
}
function getUserData(){
    var user = {
        name:signUpName.value,
        email:signUpEmail.value,
        pass:signUpPass.value,
    }
users.push(user)
    localStorage.setItem('usersInfo',JSON.stringify(users))
    location.href='/Users/midostore/Desktop/ASS 3 JS/index.html'
}
signUpButton?.addEventListener('click',function(){
     signUp();

})

//end of sign up

//sign in
var signInEmail=document.getElementById('SignInEmail');
var signInPass=document.getElementById('SignInPassword');
var logButton=document.getElementById('logBtn');
var checkpoint=document.getElementById('checkpoint')
function signIn(){
    if(signInEmail.value == '' || signInPass.value ==''){
        checkpoint.innerHTML = `<span class="text-danger my-3">All Inputs Are Required<span>`
    }else{
        for(var i=0 ; i<users.length ; i++){
        if(signInEmail.value.toLowerCase() == users[i].email.toLowerCase() && signInPass.value == users[i].pass){
    checkpoint.innerHTML = `<span class="text-success my-3">Success<span>`
    localStorage.setItem('userName',JSON.stringify(users[i].name))
    location.href = '/Users/midostore/Desktop/ASS 3 JS/home.html'
    return
        }
        }
        checkpoint.innerHTML = `<span class="text-danger my-3">you should sign up<span>`

    }
}
logButton?.addEventListener('click', function(){
    signIn()
})


//..
var userPrev=document.getElementById('userprev')
var loguser = localStorage.getItem('userName')
userPrev.innerHTML= `<h2 class="text-info"> welcome ${loguser}</h2>`

