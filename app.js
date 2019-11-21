"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    let foundPerson = searchByName(people);
    mainMenu(foundPerson, people);
    break;
    case 'no': searchByTrait(people);
    break;
        app(people); // restart app
    break;
     }
}

 function searchByTrait(people){
      while(people.length > 1 ){
      let result = [];
       var input = prompt("Please enter: Gender, EyeColor, Occupation, Weight or Height.");
       switch(input){
       case "gender":
          result = searchByGender(people);
       break;

       case "eyecolor":
        result = searchByEyeColor(people);
        break;

          case "height":
        result = searchByHeight(people);
        break;

       case "occupation":
        result = searchByOccupation(people);
       break;

       case "weight":
       result = searchByWeight(people);
       break;
    
      
       default: 
       alert("Invalid");
       break;

    }
    people = result;
  }
  return people[0];
}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);

    
    break;
    case "family":
    findFamily(people, person);   // TODO: get person's family
    break;
    case "descendants":
    findDescendants(people, person);           // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function findDescendants(people, person){
  var sameParents = people.filter(function(el){
    if (person.id == el.parent){
      return true;
    } else {
      return false;
    }
  });
  console.log(sameParents[0]);
}

 function findFamily(people, person){
    var sameFamily = people.filter(function(el){
      if(person.id == el.currentSpouse){
        return true;
      } else {
        return false;
      }
    });  
    console.log(sameFamily[0]);      
}  

//.toLowercase()......find placement in prompt so user can type name without need to have correct capitlization... 

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  var foundPeopleArray = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  });

  if (foundPeopleArray.length === 1) {
    return foundPeopleArray[0];
  } else if(foundPeopleArray.length === 0){
    return null;
  }else{
    alert("Something went wrong!!! Too many people with the same name.");
    return null;
  }


}




//alerts a list of people
function displayPeople(people){
	console.log(people.map(function(person){
	return person.firstName + " " + person.lastName;
 	 }).join("\n"));
}

// function searchByGender(people){
//     var input = prompt("Is the person male or female?");
//     var searchGender;

//     switch(input.toLowerCase()){
//       case "male":
//         searchGender = "male";
//         break;
//       case "female":
//         searchGender = "female";
//         // console.log(peopleOfGenderResultsArray);
//         break;
//       default:
//         alert("Please try again.");
//         return searchByGender(people);
//         break;

//     }
//     let results = people.filter(function(el){
//       return el.gender === searchGender
//     });




function searchByGender(people){
    var input = prompt("Is the person male or female?");
    var searchGender;

    switch(input.toLowerCase()){
      case "male":
        searchGender = "male";
        break;
      case "female":
        searchGender = "female";
        // console.log(peopleOfGenderResultsArray);
        break;
      default:
        alert("Please try again.");
        return searchByGender(people);
        break;

    }
    let results = people.filter(function(el){
      return el.gender === searchGender
    });
     console.log(results[0]);

     return results;

}


function searchByEyeColor(people){
    var input = prompt("What is the persons eye color?");
    var searchEyeColor;

    switch(input){
      case "blue":
        searchEyeColor = "blue";
        break;
      case "brown":
        searchEyeColor = "brown";
        break;
      case "black":
        searchEyeColor = "black";
        break;
      case "hazel":
        searchEyeColor = "hazel";
        break;
      case "green":
        searchEyeColor = "green"
        break;
      default:
        alert("Please try again.");

        return searchByEyeColor(people);
        break;

    }
    let results = people.filter(function(el){
      return el.eyeColor === searchEyeColor
    });
     alert(this.results[0]);

     return results;

}



function searchByOccupation(people){
    var input = prompt("What is the persons occupation?");
    var searchOccupation;

    switch(input){
      case "programmer":
        searchOccupation = "programmer";
        break;
      case "assistant":
        searchOccupation = "assistant";
        break;
      case "landscaper":
        searchOccupation = "black";
        break;
      case "nurse":
        searchOccupation = "nurse";
        break;
      case "student":
        searchOccupation = "student";
        break;
      case "architect":  
        searchOccupation = "architect";
        break;
      case "doctor":
        searchOccupation = "doctor"
        break;
      case "politician":
        searchOccupation = "politician"
        break;  

      default:
        alert("Please try again.");
        return searchByOccupation(people);
        break;

    }
    let results = people.filter(function(el){
      return el.occupation === searchOccupation
    });
     console.log(results);

     return results;

}




//i attempt to create searchById but ran into issue of person.id is not defined..........

// function searchByID(people){
//   var person = personInfo;

//   var personInfo = prompt ("Please enter subjects ID number: ") + person.id + "\n"; 

//     alert(
//     "id: " + person.id + "\n" 
//     + "first name: " + person.firstName + "\n"
//     + "lastName: " + person.lastName + "\n" 
//     + "gender: " + person.gender + "\n"
//     + "dob: " + person.dob + "\n"
//     + "height: " + person.height + "\n"
//     + "weight: " + person.weight + "\n"
//     + "eyeColor: " + person.eyeColor +"\n"
//     + "occupation: " +person.occupation +"\n"
//     );

//   console.log(personInfo);

//   return personInfo;


// }




//more pseudo code what i think the function to go from inches to feet
// also a fake function for weight......
// what i think it should look like but as of this moment is not functional.........



//function to convert inches to feet

// function lengthConverter(people){
//   var valNum = prompt("please enter height in feet and inches:")
//   var feet = (height * .083333)
//   var peopleHeight = people.filter(function(el){
//       return el.height <= feet
//     });
  

//   console.log(peopleHeight[0]);
// }



// function searchByWeight(people){
//   var input = prompt("Please enter subjects weight")
//   var searchByWeight;


//   if(i=0; person.weight <= 150; i++) {
//         searchWeight = input;
//     return = results;
//   }



//     else if (i=0; person.weight <= 151 )


// }

function searchByHeight(people)
{
  let height = prompt("What is the subjects height in inches?")
      let peopleTallEnough = people.filter(function(el)
      {
        if(el.peopleTallEnough == height)
          {
          return true;
          }
        else
          {
            return false;
          }
      })
    return peopleTallEnough;
}


function searchByWeight(people){
  var bodyWeight = promptFor("What is the subjects body weight (in lbs)?:", chars);
  
  var foundPeopleArray = people.filter(function(person){
    if(person.weight == bodyWeight){
      return true;
    }
    else{
      return false;
    }
  });
  console.log(foundPeopleArray[0]);
  return foundPeopleArray;
  //  if (foundPeopleArray.length <= 1) {
  //   return foundPeopleArray[0];
  // } else if(foundPeopleArray.length === 0){
  //   return null;
  // }else{
  //   console.log("Something went wrong!!! Too many people with the same weight.");
  //   return null;
  // }


}









//   if(i=0; person.weight <= 150; i++)                                                                  
//     searchWeight = input;
//     return = resluts;


//     else if (i=0; person.weight <= 151)


// }






// function displayPerson(person){
//   var personInfo = "First Name: " + person.firstName + "\n";
//   personInfo += "Last Name: " + person.lastName + "\n";

//     alert(
//     "id: " + person.id + "\n" 
//     + "first name: " + person.firstName + "\n"
//     + "lastName: " + person.lastName + "\n" 
//     + "gender: " + person.gender + "\n"
//     + "dob: " + person.dob + "\n"
//     + "height: " + person.height + "\n"
//     + "weight: " + person.weight + "\n"
//     + "eyeColor: " + person.eyeColor +"\n"
//     + "occupation: " +person.occupation +"\n"
//     );

//   console.log(personInfo);

//   return personInfo;

// }
// function that prompts and validates user input



function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}


