const person = {
    name: "Arudra Eswar",
    age: 30,
    Qualification: "MTECH",
    Job: "Writer",
    FavThings :
    {
        thing1: "Songs",
        thing2: "Nature",
        thing3: "Travel",
        thing4: "Movies",
        thing5: "Reading"
    }
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.Qualification);
console.log(person.Job);
console.log(person["name"]);
person.address="Kurnool";
console.log(person);
person.name="Eswar Khanna";
console.log(person);
console.log(person.FavThings);