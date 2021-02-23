// Soal 1
console.log("No 1")
{
    const golden = goldenFunction = () => {
        console.log("this is golden!!")
    }      
    golden()
}

// Soal 2
console.log("\nNo 2")
{
    const newFunction = function literal(firstName, lastName){
        return {
            firstName,
            lastName,
            fullName(){
                console.log(firstName + " " + lastName)
                // return
            }
        }
    }
    //Driver Code 
    newFunction("William", "Imoh").fullName()
}

// Soal 3
console.log("\nNo 3")
{
    const newObject = {
        firstName: "Harry",
        lastName: "Potter Holt",
        destination: "Hogwarts React Conf",
        occupation: "Deve-wizard Avocado",
        spell: "Vimulus Renderus!!!"
    }

    const { firstName, lastName, destination, occupation, spell} = newObject;

    // Driver code
    console.log(firstName, lastName, destination, occupation)
}

// Soal 4
console.log("\nNo 4")
{
    const west = ["Will", "Chris", "Sam", "Holly"]
    const east = ["Gill", "Brian", "Noel", "Maggie"]
    // const combined = west.concat(east)
    const combined = [...west, ...east];

    //Driver Code
    console.log(combined)
}

console.log("\nNo 5")
{
    const planet = "earth"
    const view = "glass"
    var before = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

    // Driver Code
    console.log(before)
}