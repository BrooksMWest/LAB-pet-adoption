const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.insider.com/5f08b7e5f34d053f663fbada?width=700",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://th-thumbnailer.cdn-si-edu.com/FGt4QcvnVNNTnbLWawybTFljFO8=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/2f/31/2f31b503-2ac2-4eae-b450-d6dda531a0bf/victorville-bad-dinosaur.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://as2.ftcdn.net/v2/jpg/05/80/20/29/1000_F_580202966_LVkbNqjjTlpeye7D2zOgaa4GrKM3BlsR.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://static01.nyt.com/images/2013/12/02/arts/arts2/arts2-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/05/70/85/58/1000_F_570855802_xZj0qCu0MbzpxS1OH833D1raYeynYqV0.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you havent seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://images.uncyclomedia.co/uncyclopedia/en/8/8b/Stupid_cat_3.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://as1.ftcdn.net/v2/jpg/05/76/16/78/1000_F_576167835_saG1ZAWP9Mj1E1v1GNpf3oi3YyM6XeSq.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://pics.craiyon.com/2023-05-25/ff9b0ee8421b4d60ad3c2ec5109bcdc1.webp"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://i.redd.it/i-asked-chatgpt-to-make-a-cute-dog-and-then-make-him-even-v0-x8zgj23x6m2c1.jpg?width=768&format=pjpg&auto=webp&s=9de2909fd435040a670215885e40d6dbe07ef6ec"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://images.pond5.com/illustration-cute-dinosaur-cartoon-characters-illustration-226751626_iconl_nowm.jpeg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/funny-idiot-cats-45-5ae6ea7ce1a15__605.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/lifestyle-bestdogbreeds-1577128927.png?crop=0.503xw:1.00xh;0.263xw,0&resize=1200:*"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/41a24659-0e76-4624-a79f-5cdf46790473/dgbamlx-47b88e05-b9c8-4592-b7a6-661d6aabb9dc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxYTI0NjU5LTBlNzYtNDYyNC1hNzlmLTVjZGY0Njc5MDQ3M1wvZGdiYW1seC00N2I4OGUwNS1iOWM4LTQ1OTItYjdhNi02NjFkNmFhYmI5ZGMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JexfphXytAkL4GWt42QlfCMZtXNoqrCSRKwNEmelh40"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://qph.cf2.quoracdn.net/main-qimg-4e3dcae8b85a830828533d31a795b868-lq"
    }
  ];

 // Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// get the cards on the DOM
const cardsOnDom = (pets) => {
  let domString = "";
  for (const pet of pets) {
    domString += `<div class="pet-card" style="width: 18rem;">
    <h3 class="card-name">${pet.name}</h3>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
      <p class="card-text">${pet.type}</p>
    </div>
    <button type="button" class="btn btn-danger" id="delete--${pet.id}">Delete</button>
  </div>`;
  }

  renderToDom("#app", domString);
};

// function to filter pets with specific type
const filter = (array, petType) => {
  const typeArray = [];

  array.forEach((pet) => {
    if (pet.type === petType) {
      typeArray.push(pet);
   }
 });

  // for (const pet of array) {
  //   if (pet.type === petType) {
  //     typeArray.push(pet);
  //   }
  // }

  return typeArray;
};

const showAllButton = document.querySelector("#show-btn")
const showDogsButton = document.querySelector("#show-dogs")
const showCatsButton = document.querySelector("#show-cats")
const showDinosButton = document.querySelector("#show-dinos")

showAllButton.addEventListener("click", ()=> {
  cardsOnDom(pets);
});

showDogsButton.addEventListener("click", () => {
  const dogPets = filter(pets, "dog");
  cardsOnDom(dogPets);
});

showCatsButton.addEventListener("click", () => {
  const catPets = filter(pets, "cat");
  cardsOnDom(catPets);
});

showDinosButton.addEventListener("click", () => {
  const dinoPets = filter(pets, "dino");
  cardsOnDom(dinoPets);
});
// 1. Get all the cards to render on the DOM
// cardsOnDom(team);

// 2. Get only the teammates whose favorite color is blue on the DOM

// ******************** //
// ****** EVENTS ****** //
// ******************** //

// 1. Target both of the buttons on the DOM
//const showAllButton = document.querySelector("#show-btn");
//const showBlueButton = document.querySelector("#favorites");

// 2. Add click event to show all the instuctors on button click using the function we created above
// //showAllButton.addEventListener("click", () => {
//   cardsOnDom(team);
// });

// 3. Add click event to filter all the instructors whose favorite color is blue on button click
// showBlueButton.addEventListener("click", () => {
//   const blueTeamMembers = filter(team, "blue");
//   cardsOnDom(blueTeamMembers);
// });
const form = document.querySelector("form");
const createPet = (e) => {
  e.preventDefault();

  const newPetObj ={
    id: pets.length +1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageUrl").value,
  };
  
  pets.push(newPetObj)
  console.log("pets", pets)
  cardsOnDom(pets);
  form.reset();
}
//const addAPet = document.querySelector("#form-submit");
form.addEventListener("submit", createPet);

//this is where i'm building my delete functionality

const app = document.querySelector("#app");

app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1);
    console.log("pets", pets)
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
};
startApp();
