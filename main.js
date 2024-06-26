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
      imageUrl: "https://www.wfla.com/wp-content/uploads/sites/71/2021/10/Black-Cat-2.jpg?w=2560&h=1440&crop=1"
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
 //takes the params when we use the function - divID (where we want HTML rendered) and htmlTiRender (string we want in the specific div)
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId); //  QS finds and returns the first element that matches the divId
  selectedDiv.innerHTML = htmlToRender;//sets the innerHTML property of the selecte div and replaces it with the new content
};

//this is my card body
// get the cards on the DOM
const cardsOnDom = (pets) => {
  let domString = "";//initializes the empty string variable that we will be using to store the HTML for the cards
  for (const pet of pets) {//the loop that iterates over each pet object in the pets array
    domString += `<div class="card" style="width: 18rem;">
    <h3 class="card-name">${pet.name}</h3>
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
      <p class="card-text">${pet.type}</p>
    </div>
    <button type="button" class="btn btn-danger" id="delete--${pet.id}">Delete</button>//delete button that uses pet.id to delete the right pet
  </div>`;
  }
  //this is where we call our renderToDom utility function from above - we pass it the divID(#app) and the domString we created with our for loop above
  renderToDom("#app", domString);
};

// function to filter pets with specific type
//takes array and petType as parameters and push them into the typeArray
const filter = (array, petType) => {
  const typeArray = [];//initializes the array where we'll keep our pets

  array.forEach((pet) => {//loop that iterates over each pet in the input array
    if (pet.type === petType) {//condition that checks the pet.type of the object against the petType parameter
      typeArray.push(pet);//if the condition is true the pet object is pushed into the typeArray
   }
 });


  return typeArray;//returns the filtered array
};

// these variables connect my event listeners to the buttons on the index.html
const showAllButton = document.querySelector("#show-btn") //query selector is how we find things on the DOM
const showDogsButton = document.querySelector("#show-dogs")
const showCatsButton = document.querySelector("#show-cats")
const showDinosButton = document.querySelector("#show-dinos")

showAllButton.addEventListener("click", ()=> {//event listener for my show all pets button - has no filter
  cardsOnDom(pets);
});

showDogsButton.addEventListener("click", () => {//event listener for my dogs button - uses filter function from above to get pets with type: "dog"
  const dogPets = filter(pets, "dog");//where we actually use the filter we made above
  cardsOnDom(dogPets);//function puts the filtered dogPets on the dom when we clock the showDogsButton
});

showCatsButton.addEventListener("click", () => {
  const catPets = filter(pets, "cat");
  cardsOnDom(catPets);
});

showDinosButton.addEventListener("click", () => {
  const dinoPets = filter(pets, "dino");
  cardsOnDom(dinoPets);
});


//where my form code starts
const form = document.querySelector("form");//declares my form variable and tells it where to go on the DOM
const createPet = (e) => {//function that takes (event) as the parameter and handles the form submission
  e.preventDefault();//stops the page from releading(default behavior) on submission

  const newPetObj = {//here we define the newPetObj we're creating that will go into our pets array
    id: pets.length +1,
    name: document.querySelector("#name").value,//values on these are taken from to form input IDs
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageUrl").value,
  };
  
  pets.push(newPetObj)//uses push method to put newPetObj into the pets array
  cardsOnDom(pets);//updates the dom to display the updated pets array
  form.reset();//resets the form after the pet has been added
}

form.addEventListener("submit", createPet); //event listener that runs createPet function when a user clicks submit


//this is where i'm building my delete functionality

const app = document.querySelector("#app");//selects the HTML element with the id "app" and assigns it to const app

app.addEventListener("click", (e) => {//adds the event listener to the app element when a user clicks delete. the e parameter is the event

  if (e.target.id.includes("delete")) {//condition that the clicked element has the string "delete"
    const [, id] = e.target.id.split("--");//this line splits the the id of the clicked element by "--" and assigns the second part to the variable "id"
    const index = pets.findIndex(e => e.id === Number(id));//sets the index variable of the pet object in the pets array whose id matches the id extracted from the clicked elements' ID
    pets.splice(index, 1);//uses the splice method to remove the pet object from the array at the index we just found
    cardsOnDom(pets);//we call this function to update the DOM with the new pets array after we've clicked delete
  }
});

const startApp = () => {//function that puts all the cards on the dom right awayby calling cardsOnDom and passing in pets
  cardsOnDom(pets);
};
startApp(); //calls the finction we just defined above.
