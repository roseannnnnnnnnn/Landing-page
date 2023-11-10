let menu = document.querySelector('#menu-icon');

let navlist = document.querySelector('.navlist');


menu.onclick = () => {

    menu.classList.toggle('bx-x');

    navlist.classList.toggle('open');

}


function product() {

    var product = document.getElementById("product").value;

    alert("Subscribe with product: " + product);

}
