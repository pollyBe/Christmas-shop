const burger = document.querySelector(".burger-icon");
const menu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const menuLink = document.querySelector(".menu-list-item");
const modal = document.querySelector(".modal");

const gifts = [
  {
    id: 1,
    name: "Bug Magnet",
    description:
      "Able to find bugs in code like they were placed there on purpose.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+400",
    },
  },

  {
    id: 2,
    name: "Console.log Guru",
    description: "Uses console.log like a crystal ball to find any issue.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+400",
    },
  },

  {
    id: 3,
    name: "Shortcut Cheater",
    description: "Knows every keyboard shortcut like they were born with them.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+400",
      dream: "+200",
    },
  },

  {
    id: 4,
    name: "Merge Master",
    description:
      "Merges branches in Git without conflicts, like a wizard during an exam.",
    category: "For Work",
    superpowers: {
      live: "+200",
      create: "+500",
      love: "+200",
      dream: "+300",
    },
  },

  {
    id: 5,
    name: "Async Tamer",
    description:
      "Handles asynchronous code and promises like well-trained pets.",
    category: "For Work",
    superpowers: {
      live: "+100",
      create: "+400",
      love: "+200",
      dream: "+300",
    },
  },

  {
    id: 6,
    name: "CSS Tamer",
    description:
      "Can make Flexbox and Grid work together like they were always best friends.",
    category: "For Work",
    superpowers: {
      live: "+200",
      create: "+500",
      love: "+200",
      dream: "+300",
    },
  },

  {
    id: 7,
    name: "Time Hacker",
    description:
      "Writes code at the last moment but always meets the deadline.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+200",
    },
  },

  {
    id: 8,
    name: "Layout Master",
    description:
      "Creates perfect layouts on the first try, like they can read the designer's mind.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+300",
      love: "+200",
      dream: "+200",
    },
  },

  {
    id: 9,
    name: "Documentation Whisperer",
    description:
      "Understands cryptic documentation as if they wrote it themselves.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+200",
      dream: "+100",
    },
  },

  {
    id: 10,
    name: "Feedback Master",
    description: "Accepts client revisions with the Zen calm of Buddha.",
    category: "For Work",
    superpowers: {
      live: "+300",
      create: "+500",
      love: "+300",
      dream: "+400",
    },
  },

  {
    id: 11,
    name: "Code Minimalist",
    description:
      "Writes code so concise that one line does more than a whole file.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+200",
    },
  },

  {
    id: 12,
    name: "Pixel-Perfect Magician",
    description:
      "Aligns elements to the last pixel, even when the design looks abstract.",
    category: "For Work",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+400",
      dream: "+400",
    },
  },

  {
    id: 13,
    name: "Posture Levitation",
    description:
      "Can sit for hours, but maintains perfect posture like a ballerina.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+500",
      love: "+500",
      dream: "+400",
    },
  },

  {
    id: 14,
    name: "Step Master",
    description: "Gets 10,000 steps a day even while sitting at the computer.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+500",
      dream: "+400",
    },
  },

  {
    id: 15,
    name: "Snack Resister",
    description: "Ignoring desktop snacks like a strict dietician.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+100",
      love: "+200",
      dream: "+400",
    },
  },

  {
    id: 16,
    name: "Hydration Bot",
    description:
      "Drinks the recommended 2 liters of water a day like a health-programmed robot.",
    category: "For Health",
    superpowers: {
      live: "+500",
      create: "+300",
      love: "+500",
      dream: "+500",
    },
  },

  {
    id: 17,
    name: "Sleep Overlord",
    description: "Sleeps 6 hours but feels like they had 10.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+500",
      love: "+500",
      dream: "+500",
    },
  },

  {
    id: 18,
    name: "Break Guru",
    description:
      "Takes a stretch break every hour without forgetting, no matter how focused.",
    category: "For Health",
    superpowers: {
      live: "+300",
      create: "+300",
      love: "+300",
      dream: "+400",
    },
  },

  {
    id: 19,
    name: "Eye Protector",
    description:
      "Can work all day at the monitor without feeling like their eyes are on fire.",
    category: "For Health",
    superpowers: {
      live: "+100",
      create: "+300",
      love: "+500",
      dream: "+400",
    },
  },

  {
    id: 20,
    name: "Stress Dodger",
    description: "Masters meditation right at the keyboard.",
    category: "For Health",
    superpowers: {
      live: "+100",
      create: "+400",
      love: "+200",
      dream: "+400",
    },
  },

  {
    id: 21,
    name: "Yoga Coder",
    description: "Easily switches from coding to yoga and back.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+400",
      love: "+400",
      dream: "+400",
    },
  },

  {
    id: 22,
    name: "Healthy Snacker",
    description:
      "Always picks fruit, even when chocolate is within arm’s reach.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+200",
      dream: "+400",
    },
  },

  {
    id: 23,
    name: "Chair Exerciser",
    description: "Manages to work out without leaving the chair.",
    category: "For Health",
    superpowers: {
      live: "+500",
      create: "+500",
      love: "+500",
      dream: "+400",
    },
  },

  {
    id: 24,
    name: "Caffeine Filter",
    description:
      "Drinks coffee at night and still falls asleep with no problem.",
    category: "For Health",
    superpowers: {
      live: "+400",
      create: "+300",
      love: "+500",
      dream: "+200",
    },
  },

  {
    id: 25,
    name: "Joy Charger",
    description:
      "Finds joy in the little things—even in a build that finishes unexpectedly fast.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
  },

  {
    id: 26,
    name: "Error Laugher",
    description:
      "Laughs at code errors like they’re jokes instead of getting angry.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
  },

  {
    id: 27,
    name: "Bug Acceptance Guru",
    description:
      "Accepts bugs as part of the journey to perfection — it’s just another task.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+400",
    },
  },

  {
    id: 28,
    name: "Spontaneous Coding Philosopher",
    description:
      "Philosophically accepts any client suggestion after a long refactor.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+400",
    },
  },

  {
    id: 29,
    name: "Deadline Sage",
    description:
      "Remains zen even when the deadline is close and the project manager is stressed.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+300",
      dream: "+500",
    },
  },

  {
    id: 30,
    name: "Inspiration Maestro",
    description:
      "Finds inspiration on an empty screen as if masterpieces are already there.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+400",
      dream: "+100",
    },
  },

  {
    id: 31,
    name: "Peace Keeper",
    description: "Maintains inner calm even in moments of intense crisis.",
    category: "For Harmony",
    superpowers: {
      live: "+200",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
  },

  {
    id: 32,
    name: "Empathy Guru",
    description: "Feels the team’s mood and can lift everyone’s spirits.",
    category: "For Harmony",
    superpowers: {
      live: "+500",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
  },

  {
    id: 33,
    name: "Laughter Generator",
    description:
      "Can lighten any tense situation with a joke that even bugs laugh at.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+200",
      dream: "+500",
    },
  },

  {
    id: 34,
    name: "Pause Master",
    description: "Knows when to just step back from the keyboard and breathe.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+100",
      dream: "+100",
    },
  },

  {
    id: 35,
    name: "Coder Healer",
    description:
      "Can support a colleague in their darkest hour, even if it’s a 500 error.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+500",
      dream: "+500",
    },
  },

  {
    id: 36,
    name: "Music Code Curator",
    description:
      "Creates work playlists so good, even deadlines follow the rhythm.",
    category: "For Harmony",
    superpowers: {
      live: "+300",
      create: "+200",
      love: "+300",
      dream: "+200",
    },
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let currentOffset = 0;
  const slides = document.querySelectorAll(".slider-list_item");
  const sliderList = document.querySelector(".slider-list");
  const leftArrow = document.querySelector(".slider-btn-left");
  const rightArrow = document.querySelector(".slider-btn-right");
  let totalWidth = 0;
  let visibleArea = sliderList.clientWidth;
  let shiftAmount = 0;

  slides.forEach((slide) => {
    totalWidth += slide.offsetWidth;
  });

  function updateVisibleItems() {
    const width = window.innerWidth;
    visibleArea = sliderList.clientWidth;

    if (width <= 768) {
      shiftAmount = (totalWidth - visibleArea) / 6;
    } else {
      shiftAmount = (totalWidth - visibleArea) / 3;
    }
    currentOffset = 0;
    updateSlider();
    updateArrows();
  }

  function updateArrows() {
    leftArrow.classList.toggle("disabled", currentOffset === 0);
    rightArrow.classList.toggle(
      "disabled",
      currentOffset >= totalWidth - visibleArea
    );
  }

  function updateSlider() {
    sliderList.style.transform = `translateX(-${currentOffset}px)`;
  }

  function handleArrowClick(direction) {
    if (direction === "left" && currentOffset > 0) {
      currentOffset = Math.max(0, currentOffset - shiftAmount);
    } else if (
      direction === "right" &&
      currentOffset < totalWidth - visibleArea
    ) {
      currentOffset = Math.min(
        totalWidth - visibleArea,
        currentOffset + shiftAmount
      );
    }
    updateSlider();
    updateArrows();
  }

  leftArrow.addEventListener("click", () => handleArrowClick("left"));
  rightArrow.addEventListener("click", () => handleArrowClick("right"));

  window.addEventListener("resize", updateVisibleItems);

  updateVisibleItems();
  updateSlider();
  updateArrows();

  //// timer

  function updateTime() {
    const currentTime = new Date();
    const newYear = new Date(Date.UTC(currentTime.getUTCFullYear() + 1, 0, 1));
    const remainingTime = newYear - currentTime;

    const seconds = Math.floor((remainingTime / 1000) % 60);
    const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  setInterval(updateTime, 1000);
  updateTime();

  ///random cards
  const cardsList = document.querySelector(".best-gifts-list");
  function createItem(gift) {
    const cardsItem = document.createElement("li");
    cardsItem.id = gift.id;
    cardsItem.className = "best-gifts_item";
    const itemImgWrap = document.createElement("div");
    itemImgWrap.className = "item-img-wrap";
    const itemImg = document.createElement("img");
    itemImg.className = "item-img";
    itemImgWrap.append(itemImg);
    const itemDescr = document.createElement("div");
    itemDescr.className = "item-descr";
    const category = document.createElement("div");
    category.className = "category";
    const categoryText = document.createElement("p");
    categoryText.textContent = `${gift.category}`;
    category.append(categoryText);
    const itemName = document.createElement("div");
    itemName.className = "name";
    const nameText = document.createElement("p");
    nameText.textContent = `${gift.name}`;
    itemName.append(nameText);
    itemDescr.append(category, itemName);
    cardsItem.append(itemImgWrap, itemDescr);
    if (gift.category === "For Work") {
      itemImg.src = "./assets/images/gift-for-work.png";
      category.classList.add("for-work");
    } else if (gift.category === "For Health") {
      itemImg.src = "./assets/images/gift-for-health.png";
      category.classList.add("for-health");
    } else if (gift.category === "For Harmony") {
      itemImg.src = "./assets/images/gift-for-harmony.png";
      category.classList.add("for-harmony");
    }
    cardsItem.addEventListener("click", () => {
      modalOpen(gift);
    });
    return cardsItem;
  }
  function renderRandomCards() {
    cardsList.innerHTML = "";
    const randomGifts = gifts.sort(() => 0.5 - Math.random()).slice(0, 4);
    randomGifts.forEach((gift) => {
      const card = createItem(gift);
      cardsList.append(card);
    });
  }
  renderRandomCards();

  /////// burger

  burger.addEventListener("click", () => {
    if (!burger.classList.contains("clicked")) {
      burger.classList.add("clicked");
      menu.style.transform = "translateX(0%)";
      menu.style.display = "flex";
      body.classList.add("menu-open");
    } else {
      burger.classList.remove("clicked");
      menu.style.transform = "translateX(100%)";
      menu.style.display = "none";
      body.classList.remove("menu-open");
    }
  });
  menu.addEventListener("click", () => {
    if (!burger.classList.contains("clicked")) {
      burger.classList.add("clicked");
      menu.style.transform = "translateX(0%)";
      body.classList.add("menu-open");
    } else {
      burger.classList.remove("clicked");
      menu.style.transform = "translateX(100%)";
      body.classList.remove("menu-open");
    }
  });

  /////modal

  function closeModal() {
    modal.style.display = "none";
    body.classList.remove("menu-open");
  }
  document
    .querySelector(".close")
    .addEventListener("click", () => closeModal());

  modal.addEventListener("click", (e) => {
    if (!e.target.classList.contains("modal-category")) {
      closeModal();
    }
  });
  function modalOpen(gift) {
    const category = document.querySelector(".modal-category");
    if (gift.category === "For Work") {
      document.querySelector(".modal-img").src =
        "./assets/images/gift-for-work.png";
      category.classList.add("for-work");
    } else if (gift.category === "For Health") {
      document.querySelector(".modal-img").src =
        "./assets/images/gift-for-health.png";
      category.classList.add("for-health");
    } else if (gift.category === "For Harmony") {
      document.querySelector(".modal-img").src =
        "./assets/images/gift-for-harmony.png";
      category.classList.add("for-harmony");
    }
    category.textContent = gift.category;
    document.querySelector(".modal-title").textContent = gift.name;
    document.querySelector(".modal-description").textContent = gift.description;
    document.querySelector(".amount-live").textContent = gift.superpowers.live;
    document.querySelector(".amount-create").textContent =
      gift.superpowers.create;
    document.querySelector(".amount-love").textContent = gift.superpowers.love;
    document.querySelector(".amount-dream").textContent =
      gift.superpowers.dream;
    renderSnowflakes(
      document.querySelector(".superpower-live"),

      parseInt(gift.superpowers.live)
    );
    renderSnowflakes(
      document.querySelector(".superpower-create"),
      parseInt(gift.superpowers.create)
    );
    renderSnowflakes(
      document.querySelector(".superpower-love"),

      parseInt(gift.superpowers.love)
    );
    renderSnowflakes(
      document.querySelector(".superpower-dream"),

      parseInt(gift.superpowers.dream)
    );

    modal.style.display = "block";
    body.classList.add("menu-open");
  }

  function renderSnowflakes(element, count) {
    element.innerHTML = "";
    const maxSnowflakes = 5;
    const redSnowflakes = Math.min(count / 100, maxSnowflakes);
    for (let i = 0; i < maxSnowflakes; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      if (i < redSnowflakes) {
        snowflake.classList.add("red");
      }
      element.appendChild(snowflake);
    }
  }
});
