function openLoginModalWindow() {
//   let modalWindow = document.getElementsByClassName("modalContainer")[0];
//   modalWindow.style.display = "block";
    let modalWindow = document.getElementById("myModal");
    modalWindow.style.display = "block";
}
function openRegisterModalWindow() {
  let modalWindow = document.getElementById("myModal2");
  modalWindow.style.display = "block";
}
function closeLoginModalWindow() {
  let modalWindow = document.getElementById("myModal");
  modalWindow.style.display = "none";
}
function closeRegisterModalWindow() {
  let modalWindow = document.getElementById("myModal2");
  modalWindow.style.display = "none";
}
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("Login");
// var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }


// window.onclick = function(event) {
//   if (event.target == modal) {
//   modal.style.display = "none";
//   }
// }


function openModalWindow() {
  let modalWindow = document.getElementsByClassName("modalContainer")[0];
  modalWindow.style.display = "block";
}
function closeModalWindow() {
  let modalWindow = document.getElementsByClassName("modalContainer")[0];
  modalWindow.style.display = "none";
}