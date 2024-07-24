import loadTeams from './teams.js'
import  loadHeaderFooter  from "./utils.js";


loadHeaderFooter();
loadTeams();


document.addEventListener('DOMContentLoaded', function() {
    var form = document.forms["Contact"]

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        var fname = form.elements["fname"].value;
        var lname = form.elements["lname"].value;
        var fmail = form.elements["fmail"].value;
    

        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('fmail', fmail);
       

        alert("The message was sent!");

        this.submit();
    });

    if (localStorage.getItem('fname')) {
        form.elements["fname"].value = localStorage.getItem('fname');
        form.elements["lname"].value = localStorage.getItem('lname');
        form.elements["fmail"].value = localStorage.getItem('fmail');
    }
});
