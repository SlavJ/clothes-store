"use strict";
console.log("step into my shoes");

const trainersContainer = document.getElementById("trainers-container");
console.log(trainersContainer);

const allTrainers = [];

let sizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function Trainer(page, image, name, colour, price) {
  this.page = page;
  this.image = image;
  this.name = name;
  this.colour = colour;
  this.price = price;
  allTrainers.push(this);
  this.render();
}

Trainer.prototype.render = function () {
  let div = document.createElement("div");
  div.classList.add("product-card");
  let anchor = document.createElement("a");
  anchor.setAttribute("href", this.page);
  div.appendChild(anchor);
  //
  let image = document.createElement("img");
  image.setAttribute("src", this.image);
  image.setAttribute("alt", this.name);
  anchor.appendChild(image);

  let h3 = document.createElement("h3");
  h3.textContent = this.name;
  anchor.appendChild(h3);

  let para = document.createElement("p");
  para.textContent = this.colour;
  anchor.appendChild(para);

  let price = document.createElement("p");
  price.textContent = "£" + this.price;
  anchor.appendChild(price);
  console.log(div);
  trainersContainer.appendChild(div);
};

const airJordanOne = new Trainer(
  "joneunblue.html",
  "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F02%2Fair-jordan-1-university-blue-555088-134-release-date-0.jpg?w=960&cbr=1&q=90&fit=max",
  "Air Jordan 1 Retro High OG",
  "University Blue",
  115
);

const airOffWhite = new Trainer(
  "offwjone.html",
  "https://www.niakeu.com/wp-content/uploads/2023/04/08D4A261-00E0-DE67-7A29-24456FB78478.jpg",
  "Off-White x Air Jordan 1 Retro High OG",
  "Chicago",
  110
);

const airJordanFour = new Trainer(
  "jfourunblue.html",
  "https://images.stockx.com/images/Air-Jordan-4-Retro-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1616520672&q=75",
  "Air Jordan 4 Retro",
  "University Blue",
  115
);

const airDiorOne = new Trainer(
  "",
  "https://sothebys-com.brightspotcdn.com/dims4/default/44d5a4a/2147483647/strip/true/crop/3543x2245+0+0/resize/684x433!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F62%2F70%2Fc6ce59ba4bfca8a6667b4b364920%2F741sneakers-c726n-t3-011-1.jpg",
  "Jordan x Dior Air Jordan 1 Retro High",
  "Wolf grey/sail white",
  15000
);

const jordanOneReb = new Trainer(
  "",
  "https://cms-cdn.thesolesupplier.co.uk/2021/10/air-jordan-1-high-og-rebellionaire-front-1.jpg",
  "Air Jordan 1 High OG",
  "Rebellionare",
  200
);

const airOffForce = new Trainer(
  "",
  "https://cdn.shopify.com/s/files/1/2358/2817/products/air-force-1-low-off-white-black-468497.png?v=1638812435",
  "Nike Air Force 1 Low Off-White",
  "Black",
  1500
);
console.log(allTrainers);
