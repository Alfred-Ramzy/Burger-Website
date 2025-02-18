var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

function showTabContent(contentId, tabButton) {
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.add("hidden");
  });
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("text-blue-600", "border-blue-600");
    button.classList.add("text-gray-600", "border-transparent");
  });
  document.getElementById(contentId).classList.remove("hidden");
  tabButton.classList.remove("text-gray-600", "border-transparent");
  tabButton.classList.add("text-blue-600", "border-blue-600");
}

// ! Array Of Objects Menu
const FoodBurger = [
  {
    img: "img/burger-1.png",
    name: "Classic Cheeseburger",
    price: 145,
    pricebefore: 200,
  },
  {
    img: "img/burger-2.png",
    name: "Bacon BBQ Burger",
    price: 234,
    pricebefore: 280,
  },
  {
    img: "img/burger-3.png",
    name: "Mushroom Swiss Burger",
    price: 87,
    pricebefore: 150,
  },
  {
    img: "img/burger-4.png",
    name: "Spicy Jalapeño Burger",
    price: 210,
    pricebefore: 260,
  },
  {
    img: "img/burger-5.png",
    name: "Crispy Chicken Burger",
    price: 112,
    pricebefore: 160,
  },
  {
    img: "img/burger-6.png",
    name: "Veggie Delight Burger",
    price: 273,
    pricebefore: 320,
  },
];
const FoodSnacks = [
  {
    img: "img/snack-1.png",
    name: "Classic French Fries",
    price: 189,
    pricebefore: 240,
  },
  {
    img: "img/snack-2.png",
    name: "Curly Fries",
    price: 259,
    pricebefore: 300,
  },
  {
    img: "img/snack-3.png",
    name: "Sweet Potato Fries",
    price: 120,
    pricebefore: 150,
  },
  {
    img: "img/snack-4.png",
    name: "Loaded Fries",
    price: 275,
    pricebefore: 320,
  },
  {
    img: "img/snack-5.png",
    name: "Waffle Fries",
    price: 145,
    pricebefore: 180,
  },
  {
    img: "img/snack-6.png",
    name: "Cheese Fries",
    price: 234,
    pricebefore: 270,
  },
];
const FoodBeverage = [
  {
    img: "img/beverage-1.png",
    name: "Fresh Orange Juice",
    price: 198,
    pricebefore: 250,
  },
  {
    img: "img/beverage-2.png",
    name: "Strawberry Smoothie",
    price: 158,
    pricebefore: 200,
  },
  {
    img: "img/beverage-3.png",
    name: "Mango Tango",
    price: 299,
    pricebefore: 350,
  },
  {
    img: "img/beverage-4.png",
    name: "Green Detox Juice",
    price: 167,
    pricebefore: 220,
  },
  {
    img: "img/beverage-5.png",
    name: "Watermelon Cooler",
    price: 236,
    pricebefore: 280,
  },
];


// ! Select Sections
let Myall = document.querySelector(".MyAll");
let Myfood = document.querySelector(".MyFood");
let Mybeverage = document.querySelector(".MyBeverage");
let Mysnack = document.querySelector(".MySnack");
let MymainSection = document.querySelector(".MyMainSection");

// ! First Section
Myfood.addEventListener("click", () => {
  MymainSection.innerHTML = "";
  for (let i = 0; i < FoodBurger.length; i++) {
    MymainSection.innerHTML += `
       <div class="shadow-2xl p-8 rounded-3xl my-2">
            <div
            data-aos="zoom-in-left"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000"
              class="bg-primaryColorLight  dark:bg-darkColorLight shadow-2xl p-32 relative rounded-xl">
              <img
                src="${FoodBurger[i].img}"
                class="w-44 absolute top-1/2 left-1/2 -translate-1/2"
                alt="${FoodBurger[i].img.split("/").at(1)}" />
            </div>
            <h3 class="text-xl font-bold font-myoswald my-4">
              ${FoodBurger[i].name}
            </h3>
            <p class="text-sm text-gray-100 my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div
              class="inline-flex items-center space-x-2 bg-gray-900/20 rounded-lg px-4 py-2">
              <span class="text-secondaryColor text-2xl font-extrabold"
                >$${FoodBurger[i].price}</span
              >
              <span class="line-through text-gray-400 text-lg">$ ${
                FoodBurger[i].pricebefore
              }</span>
            </div>
          </div>
    `;
  }
});

// ! Second Section
Mybeverage.addEventListener("click", () => {
  MymainSection.innerHTML = "";
  for (let i = 0; i < FoodBeverage.length; i++) {
    MymainSection.innerHTML += `
       <div  data-aos="zoom-out-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="shadow-2xl p-8 rounded-3xl my-2">
            <div
              class="bg-primaryColorLight dark:bg-darkColorLight shadow-2xl p-32 relative rounded-xl">
              <img
                src="${FoodBeverage[i].img}"
                class="w-44 absolute top-1/2 left-1/2 -translate-1/2"
                alt="${FoodBeverage[i].img.split("/").at(1)}" />
            </div>
            <h3 class="text-xl font-bold font-myoswald my-4">
              ${FoodBeverage[i].name}
            </h3>
            <p class="text-sm text-gray-100 my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div
              class="inline-flex items-center space-x-2 bg-gray-900/20 rounded-lg px-4 py-2">
              <span class="text-secondaryColor text-2xl font-extrabold"
                >$${FoodBeverage[i].price}</span
              >
              <span class="line-through text-gray-400 text-lg">$ ${
                FoodBeverage[i].pricebefore
              }</span>
            </div>
          </div>
    `;
  }
});

// ! Third Section
Mysnack.addEventListener("click", () => {
  MymainSection.innerHTML = "";
  for (let i = 0; i < FoodSnacks.length; i++) {
    MymainSection.innerHTML += `
       <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="shadow-2xl p-8 rounded-3xl my-2">
            <div
          
               class=" bg-primaryColorLight dark:bg-darkColorLight shadow-2xl p-32 relative rounded-xl">
              <img
                src="${FoodSnacks[i].img}"
                class="w-44 absolute top-1/2 left-1/2 -translate-1/2"
                alt="${FoodSnacks[i].img.split("/").at(1)}" />
            </div>
            <h3 class="text-xl font-bold font-myoswald my-4">
              ${FoodSnacks[i].name}
            </h3>
            <p class="text-sm text-gray-100 my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div
              class="inline-flex items-center space-x-2 bg-gray-900/20 rounded-lg px-4 py-2">
              <span class="text-secondaryColor text-2xl font-extrabold"
                >$${FoodSnacks[i].price}</span
              >
              <span class="line-through text-gray-400 text-lg">$ ${
                FoodSnacks[i].pricebefore
              }</span>
            </div>
          </div>
    `;
  }
});

// ! All Section
Myall.addEventListener("click", () => {
  MymainSection.innerHTML = "";
  let Myshuffle = [...FoodBeverage, ...FoodBurger, ...FoodSnacks].sort(
    (a, b) => {
      return a.price - b.price;
    }
  );
  for (let i = 0; i < Myshuffle.length; i++) {
    MymainSection.innerHTML += `
       <div data-aos="zoom-in-down"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="shadow-2xl p-8 rounded-3xl my-2">
            <div
            
              class="bg-primaryColorLight dark:bg-darkColorLight shadow-2xl p-32 relative rounded-xl">
              <img
                src="${Myshuffle[i].img}"
                class="w-44 absolute top-1/2 left-1/2 -translate-1/2"
                alt="${Myshuffle[i].img.split("/").at(1)}" />
            </div>
            <h3 class="text-xl font-bold font-myoswald my-4">
              ${Myshuffle[i].name}
            </h3>
            <p class="text-sm text-gray-100 my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div
              class="inline-flex items-center space-x-2 bg-gray-900/20 rounded-lg px-4 py-2">
              <span class="text-secondaryColor text-2xl font-extrabold"
                >$${Myshuffle[i].price}</span
              >
              <span class="line-through text-gray-400 text-lg">$ ${
                Myshuffle[i].pricebefore
              }</span>
            </div>
          </div>
    `;
  }
});

// ! All Section
window.addEventListener("load", () => {
  MymainSection.innerHTML = "";
  let Myshuffle = [...FoodBeverage, ...FoodBurger, ...FoodSnacks].sort(
    (a, b) => {
      return a.price - b.price;
    }
  );
  Myall.classList.add("bg-secondaryColor");

  for (let i = 0; i < Myshuffle.length; i++) {
    MymainSection.innerHTML += `
       <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" class="shadow-2xl p-8   rounded-3xl my-2">
            <div
             data-aos-duration="2000"
              class="bg-primaryColorLight fade-right dark:bg-darkColorLight hover:bg-secondaryColor transition-all duration-300 shadow-2xl p-32 relative rounded-xl">
              <img
                src="${Myshuffle[i].img}"
                class="w-44 absolute top-1/2 left-1/2 -translate-1/2"
                alt="${Myshuffle[i].img.split("/").at(1)}" />
            </div>
            <h3 class="text-xl font-bold font-myoswald my-4">
              ${Myshuffle[i].name}
            </h3>
            <p class="text-sm text-gray-100 my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div
              class="inline-flex items-center space-x-2 bg-gray-900/20 rounded-lg px-4 py-2">
              <span class="text-secondaryColor text-2xl font-extrabold"
                >$${Myshuffle[i].price}</span
              >
              <span class="line-through text-gray-400 text-lg">$ ${
                Myshuffle[i].pricebefore
              }</span>
            </div>
          </div>
    `;
  }
});

let mylist = document.querySelectorAll(".lll");
for (let i = 0; i < mylist.length; i++) {
    mylist[i].addEventListener("click", () => {
    mylist.forEach((item) => item.classList.remove("bg-secondaryColor"));
    mylist[i].classList.add("bg-secondaryColor");
  });
}

const swiper1 = new Swiper(".theswiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

window.addEventListener("scroll", () => {
  const scrollupbtn = document.getElementById("scrollupbtn");
  if (this.scrollY >= 400) {
    scrollupbtn.classList.remove("opacity-0");
  } else {
    scrollupbtn.classList.add("opacity-0");
  }
});

const html = document.querySelector("html");
const Theme = document.getElementById("theme-toggle");
const aaaaa = document.getElementById("hhoo");

if (localStorage.getItem("mode") === "dark") {
  DarkMode();
} else {
  LightMode();
}

Theme.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") === "light") {
    DarkMode();
  } else {
    LightMode();
  }
});

function DarkMode() {
  html.classList.add("dark");
  aaaaa.classList.replace("fa-moon", "fa-sun");

  localStorage.setItem("mode", "dark");
}
function LightMode() {
  html.classList.remove("dark");
  aaaaa.classList.replace("fa-sun", "fa-moon");
  aaaaa.classList.replace("fa-regular", "fa-solid");

  localStorage.setItem("mode", "light");
}

const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav_link");

  let current = "Header";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.add("text-white");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("text-secondaryColor");
      item.classList.remove("text-white");
    }
  });
};

const navButtons = document.querySelectorAll(".btn-nav");

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", () => {
    for (let j = 0; j < navButtons.length; j++) {
      navButtons[j].classList.remove("dark:bg-secondary", "bg-secondary");
      navButtons[j].classList.add(
        "dark:bg-darkColorLight",
        "bg-primaryColorLight"
      );
    }

    navButtons[i].classList.remove(
      "dark:bg-darkColorLight",
      "bg-primaryColorLight"
    );
    navButtons[i].classList.add("dark:bg-secondary", "bg-secondary");
  });
}
window.addEventListener("scroll", activeLink);

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });

sr.reveal(".category__card", { interval: 300 });

sr.reveal(".promo__card-1", { origin: "left" });
sr.reveal(".promo__card-2", { origin: "right" });

sr.reveal(".about__img", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });
sr.reveal(".customer__review", { origin: "right" });

AOS.init();


document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#typed-output", {
    strings: ["HAPPY TUMMY WITH TASTY BURGERS."],
    typeSpeed: 70,
    backSpeed: 70,
    showCursor: false,
    loop: false,
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let typed = new Typed("#typed-paragraph", {
    strings: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. |",
    ],
    typeSpeed: 70,
    backSpeed: 70,
    showCursor: false,
    loop: true,
  });
});

setTimeout(() => {
  console.log("Displaying SweetAlert...");
  Swal.fire({
    title: "Do Not Miss This Deal!",
    text: "Take The 50% Offer When You Buy 2 Burgers",
    imageUrl: "img/burger and fries (2).jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}, 9000);

let mybtn2 = document.getElementById("Btn-2");
let email = document.getElementById("email");
mybtn2.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You Entered An Valid Email | Please Try Again",

    });
  } else {
    Swal.fire({
      icon: "success",
      title: "Well Done",
      text: "The Email Was Sent Successfully",
    });
  }
});
