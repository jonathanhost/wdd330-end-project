import  loadHeaderFooter from "./utils.js";
import loadtransfer from "./transfer.js"

loadHeaderFooter();

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id_team = params.get('id');
const listplayers = loadtransfer(id_team);
const buttonIn = document.querySelector(".in")
const buttonOut = document.querySelector(".out")
const buttonAll = document.querySelector(".all")

function hideDiv(action1) {
    var divs = document.querySelectorAll( `.${action1}`);
    divs.forEach(function(div) {
        div.style.display = "none";
    });
}

function showdiv(status) {
    var divs = document.querySelectorAll( `.${status}`);
    divs.forEach(function(div) {
        div.style.display = "flex";
    });
}



buttonOut.addEventListener('click', () => {
    hideDiv('transfer-in')
    showdiv('transfer-out')
});
buttonIn.addEventListener('click', () => {
    hideDiv('transfer-out')
    showdiv('transfer-in')
});

buttonAll.addEventListener('click', () => {
    showdiv('transfer-out')
    showdiv('transfer-in')
});