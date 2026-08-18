// const ourArray = [5, 2, 8, 1, 9];
// console.log(ourArray);


// Map

// const mapNewArray = ourArray.map ((data) => {
//         return data + 50;
// })

// console.log(mapNewArray);

// filter

// const filterNewArray = ourArray.filter ((data) => {
//         return data < 4;
      
// })

// console.log(filterNewArray);


// find


// const findNewArray = ourArray.find((data) => data < 3);
// console.log("Find :", findNewArray);

// reduce

// const ReduceArray = ourArray.reduce ((accumulatorValue, currentValue) => {
//       return accumulatorValue + currentValue
// },0)

// console.log(ReduceArray);





 // ---------- Data ----------
  var students = [
  { name: "Aarav", marks: 88, class: "10-A", address: "Pune" },
  { name: "Simran", marks: 74, class: "9-B", address: "Ludhiana" },
  { name: "Rohan", marks: 92, class: "10-A", address: "Nagpur" },
  { name: "Ananya", marks: 65, class: "9-C", address: "Chennai" },
  { name: "Kabir", marks: 58, class: "8-A", address: "Jaipur" },
   { name: "Ajinkya", marks: 88, class: "10-A", address: "Pune" },
  { name: "Shivani", marks: 74, class: "9-B", address: "Ludhiana" },
  { name: "Rohul", marks: 92, class: "10-A", address: "Nagpur" },
  { name: "Nitin", marks: 65, class: "9-C", address: "Chennai" },
  { name: "Karan", marks: 58, class: "8-A", address: "Jaipur" },
  { name: "Nitin P", marks: 65, class: "9-C", address: "Chennai" },
  { name: "Karan A", marks: 58, class: "8-A", address: "Jaipur" },
];
 
// show all the cards using map
function showCards(studentList) {
  var container = document.getElementById("cardContainer");
 
  if (studentList.length == 0) {
    container.innerHTML = "<p>No students found</p>";
    return;
  }
 
  var cardsArray = studentList.map(function (student) {
    return (
      "<div class='card'>" +
      "<h3>" + student.name + "</h3>" +
      "<p>Marks: " + student.marks + "</p>" +
      "<p>Class: " + student.class + "</p>" +
      "<p>Address: " + student.address + "</p>" +
      "</div>"
    );
  });
 
  container.innerHTML = cardsArray.join("");
}
 
// search only by name using filter
function searchByName() {
  var searchValue = document.getElementById("searchInput").value;
  searchValue = searchValue.toLowerCase();
 
  var filteredStudents = students.filter(function (student) {
    return student.name.toLowerCase().includes(searchValue);
  });
 
  showCards(filteredStudents);
}
 
// run search when button is clicked
document.getElementById("searchBtn").addEventListener("click", searchByName);
 
// show everyone when page first loads
showCards(students);
