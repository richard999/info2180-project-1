/* Add your JavaScript to this file */

window.onload = function(){
    const newsletter = document.getElementsByClassName('newsletter')[0];
    var email = document.getElementById('email');
    const btn = newsletter.getElementsByTagName('button')[0];
    const message = newsletter.getElementsByClassName('message')[0];

    var invalidMessage = `Please enter a valid email address`;

    btn.onclick = ev =>{
        ev.preventDefault();
        if( message.textContent  == (!email.value || email.value == "") ){
            alert(invalidMessage)
        }
        else{  alert(`Thank you! Your email address ${email.value} has been added to our mailing list`)}
    } 