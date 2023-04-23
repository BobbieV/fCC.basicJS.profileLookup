// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    //we're gonna check the list//
    for (let x = 0; x < contacts.length; x++) {
      //does the name match?//
  if (contacts[x].firstName === name) {
    //does the property match?//
    if (contacts[x].hasOwnProperty(prop)) {
      //property match-- return property//
      return contacts[x][prop];
    }else{
      //property does not match//
      return "No such property";
    }
    }
    }//property does match, but name does not//
    return "No such contact";
  }