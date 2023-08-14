const url = "http://localhost:3000/ramens";
const ramenMenDiv = document.getElementById("ramen-menu");
const ramenDetailDiv = document.getElementById("ramen-detail");
const ramenForm = document.getElementById("new-ramen");
const detailImg = document.getElementById("detail-image");
const detailRest = document.getElementById("restaurant");
const detailName = document.getElementById("name");
const rating = document.getElementById("rating-display");
const comment = document.getElementById("comment-display");

//fetch request
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => {
      let ramenImg = document.createElement("img");
      ramenImg.src = data.image;
      ramenMenDiv.appendChild(ramenImg);
      ramenImg.addEventListener("click", (e) => {
        //display hero image on click
        detailImg.src = data.image;
        detailRest.textContent = data.restaurant;
        detailName.textContent = data.name;
        rating.textContent = data.rating;
        comment.textContent = data.comment;
      });
    });
  });

//  Create a new ramen after submitting the new-ramen form.
ramenForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newRamenName = e.target.name.value;
  let newRamenRest = e.target.restaurant.value;
  let newRamenImg = e.target.image.value;
  let newRamenImage = document.createElement("img");
  newRamenImage.src = newRamenImg;
  let newRamenRating = e.target.rating.value;
  let newRamenComment = e.target["new-comment"].value;
  ramenMenDiv.append(newRamenImage);
});
//The new ramen should be added to the#ramen-menu div.
