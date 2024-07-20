export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get(param);
    return product;
  }

  export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.insertAdjacentHTML("afterbegin", template);
    //if there is a callback...call it and pass data
    if (callback) {
      callback(data);
    }
  }
  async function loadTemplate(path) {
    const res = await fetch(path);
    const template = await res.text();
    return template;
  }
  export default async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("../partials/header.html");
    const headerElement = document.querySelector("#main-header");
    const footerTemplate = await loadTemplate("../partials/footer.html");
    const footerElement = document.querySelector("#main-footer");
  
    renderWithTemplate(headerTemplate, headerElement);
    renderWithTemplate(footerTemplate, footerElement);
    const menuBtn = document.querySelector('#menu-btn');
    const navLinks = document.getElementById('nav-links');

        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('show');
            });
        } else {
            console.error('Menu button or nav links not found');
        }
  }