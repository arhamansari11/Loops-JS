
let templatesliterals = "<h1>Templates Literals is the Javascript Function in which we use ``  in code.<br/> In this we call variable with $ Sign <br/>Let we see the example of Templates Literals</h1>";
document.write(templatesliterals); 



let introobj = {
    name1 : "Arham",
    marks : 346,
    age : 18,
    fname : "Nadeem",
    alwaysspeak : true
}
document.write( `<h2>Hi I'm Muhammad ${introobj["name1"]}.My marks in 1st year is ${introobj["marks"]}.I am ${introobj["age"]} years old.My father name is ${introobj["fname"]}.I am not a fake frnd and that is ${introobj["alwaysspeak"]}  <h2/>`)