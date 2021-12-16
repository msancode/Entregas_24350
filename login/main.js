function Login() {
  var a = new Array();
  up1 = new Object();
  up2 = new Object();

  up1 = {
    name: "abcd@gmail.com",
    password: btoa("abc@12"),
  };
  up2 = {
    name: "bcd@gmail.com",
    password: btoa("bcd@12"),
  };
  a.push(up1);
  a.push(up2);
}
var username = document.getElementById(‘uname’).value;
var password = document.getElementById(‘psw’).value;
sessionStorage.setItem(“currentloggedin”,username);localStorage.setItem('all_users',JSON.stringify(a));