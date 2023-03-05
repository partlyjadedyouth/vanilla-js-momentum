const images = [
    "0.jpg",
    "1.jpg",
    "2.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// document.body.appendChild(bgImage);
document.getElementsByTagName("body")[0].style = `background-image: url(${bgImage.src}); background-size: cover;`;