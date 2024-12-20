function pass(){
    document.getElementById('mn').style.display="none";
    document.getElementById('main').style.display="flex";
    document.getElementById('login').style.display="block";
    const name = document.getElementById('name').value;
    document.getElementById('nam').value=name;
    document.getElementById('nam').ariaDisabled=true;
}
function next(){
    const name = document.getElementById('name').value;
    const password = document.getElementById('pwd').value;
    const use = JSON.parse(localStorage.getItem('user')) || [];
    const user=use.find(user => user.name===name && user.pass===password||user.phone===name);
    localStorage.setItem("profile", JSON.stringify(user));
    console.log(name, password, user);
   if(user){
    window.location.href='home.html';
   }
   else{
    alert('wrong password');
   }
}