
function next(){
    document.getElementById('man').style.display="flex";
    document.getElementById('main').style.display="none";
    document.getElementById('login2').style.display="block";
    document.getElementById('login').style.display="none";
    document.getElementById('txt21').style.display="block"; 
    document.getElementById('txt3').style.display="block";
   
}
function next2(){
    const name = document.getElementById('username').value;
    const phone = document.getElementById('tel').value;
    const password = document.getElementById('passwd').value;
    
    let person = JSON.parse(localStorage.getItem('user')) || [];
    let random = person.length;
    const arra = {
        "name":name,
        "pass":password,
        "id":random,
        "phone":phone};
        if(!Array.isArray(person)){
            person=[];
        }
    person.push(arra);
    localStorage.setItem("user", JSON.stringify(person));
    window.location.href='sign in.html';
    
}
