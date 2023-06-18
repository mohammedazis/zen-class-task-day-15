
document.querySelector(".judge").addEventListener("click", function() {
  let values = document.createElement("h1");
  let data = document.getElementById("fot");
  values.innerText = data.value;
  document.body.appendChild(values);
  console.log('day')
});