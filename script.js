const emailList = [
  "kingtemp@mail.com",
  "fakegenius@maildrop.cc",
  "tempgod@disposable.org",
  "trialuser@yopmail.com",
  "anonymous@inboxbear.com"
];

function generateEmail() {
  const random = Math.floor(Math.random() * emailList.length);
  document.getElementById("email").innerText = emailList[random];
}

function copyEmail() {
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email);
  alert("Copied: " + email);
}

window.onload = generateEmail;
