// function to create user profiles by combining original and modified names
function createUserProfiles(names,modifiedName){


   
    //Creating a variable to store the final processed array of object 
    let stringObject=[];
    for (let i=0; i<names.length;i++){
        //creating object notation for our user profiles
        let userObject={
            id:i+1,
            OriginalName:names[i],
            modifiedName:modifiedName[i]
        }
            stringObject.push(userObject);
    }
     return stringObject;
}
