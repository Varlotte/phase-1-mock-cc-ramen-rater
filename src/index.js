//create div with id ramen-menu wait nvmn it already exists

//eventListener on pageload, do a fetch request with e.preventDefault
document.addEventListener("DOMContentLoaded", async (renderDiv) => {
  const response = await fetch("http://localhost:3000/ramens");
  const ramens = await response.json();
  console.log(ramens);
});

//put all images in the div with the id
function renderDiv() {
  let ramenDiv = document.getElementById("ramen-menu");
  //now we've got it, how do we make it bigger and put space inside for the fetched images?
  //ramenDiv.append();
  for (const i = 0; i < DataTransfer.length; i++) {
    let imgs = document.createElement("img");
    mainContainer.appendChild(ramenDiv);
  }
}
//display image for each using img tag inside #ramen-menu div
/*
addEventListener("click", () => {
  e.preventDefault();
  //click on image in #ramen-menu div and see:
  //all ramen information in #ramen-detail div where it says "comment"/"rating"
});

addEventListener("submit", () => {
  e.preventDefault();
  //create new ramen after submitting the ramen form added to #ramen-menu div
  //doesn't persist
});*/
