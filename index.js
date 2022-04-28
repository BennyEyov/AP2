const usersList = [{username: "yon", password: "12312312q", Nickname: "jon", picture: "pic1.jpg"},
                   {username: "boo", password: "12312312e", Nickname: "jon1", picture: "pic1.jpg"},
                   {username: "yon", password: "12312312s", Nickname: "jon2", picture: "pic1.jpg"},
                   {username: "yon", password: "12312312d", Nickname: "jon3", picture: "pic1.jpg"},];


/*function addUser(userNameInput,passwordInput,NicknameInput,pictureInput) {
  console.log("in adduser1")

  usersList.push("mic check");
  let user = {username: userNameInput, password: passwordInput, Nickname: NicknameInput, picture: pictureInput};
  usersList.push(user);
  console.log(usersList);
  console.log("in adduser2")

  return;
}*/

function getUserList() {
  console.log(usersList);
  console.log("in getUserList")
  return usersList;
}

function registerUser(){
  const userNameInput = document.getElementById("userNameInput").value;
  let passwordInput = document.getElementById("passwordInput").value;
  const passwordInput2 = document.getElementById("passwordInput2").value;
  const NicknameInput = document.getElementById("NicknameInput").value;
  const pictureInput = document.getElementById("pictureInput").value;

  if(!valdiation(passwordInput,passwordInput2,userNameInput,NicknameInput)){
    return;
  }
  console.log("in registerUser");   
  /*let user = {username: userNameInput, password: passwordInput, Nickname: NicknameInput, picture: pictureInput};*/
  /*addUser(userNameInput,passwordInput,NicknameInput,pictureInput);*/
  usersList.push({username: userNameInput, password: passwordInput, Nickname: NicknameInput, picture: pictureInput});
  console.log(usersList);
  window.location = "login.html";

}


function valdiation(pass1, pass2, name, nickname){
if(name.length < 2 || nickname.length < 2){
  console.log("names input wrong");
  return false;
}
if (typeof pass1 !== "string" || typeof pass2 !== "string") {
  console.log("Passwords must be strings");
  return false; // we only process strings! 
} 
if(pass1 !== pass2) {
  console.log("Passwords don't match");
  return false;
  }
if (pass1.length < 8 || pass1.length > 14){
  console.log("Passwords don't meet the requirements");
  return false;
}
return /^[A-Za-z0-9]*$/.test(pass1);
}


function loginUser(){
  const loginUsername1 = document.getElementById("loginUserInput").value;
  const loginPassword1 = document.getElementById("loginPasswordInput").value;

  console.log("in loginuser 1");
  console.log(usersList); 
  var item = usersList.find(o => o.username == "yon");
  console.log("in loginuser 2");

  if(!(item.password == loginPassword1)){
    console.log("wrong credentials");
    return;   
  }
  else{
    console.log("success");

  }
  window.location = "chatScreen.html";
  
} 