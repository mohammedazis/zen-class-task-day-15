var paginationLinks = document.getElementsByClassName("pagination-link");
for (var i = 0; i < paginationLinks.length; i++) {
  paginationLinks[i].addEventListener("click", handlePaginationClick);
}
function handlePaginationClick(event) {
  event.preventDefault();
  for (var i = 0; i < paginationLinks.length; i++) {
    paginationLinks[i].classList.remove("active");
  }
  event.target.classList.add("active");  
}
