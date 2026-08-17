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
  const students = [
    { name: "Aarav Mehta",     marks: 88, class: "10-A", address: "Pune, Maharashtra" },
    { name: "Simran Kaur",     marks: 74, class: "9-B",  address: "Ludhiana, Punjab" },
    { name: "Rohan Deshmukh",  marks: 92, class: "10-A", address: "Nagpur, Maharashtra" },
    { name: "Ananya Iyer",     marks: 65, class: "9-C",  address: "Chennai, Tamil Nadu" },
    { name: "Kabir Sharma",    marks: 58, class: "8-A",  address: "Jaipur, Rajasthan" },
    { name: "Meera Nair",      marks: 81, class: "10-B", address: "Kochi, Kerala" },
    { name: "Vivaan Gupta",    marks: 69, class: "9-A",  address: "Lucknow, Uttar Pradesh" },
    { name: "Diya Patel",      marks: 95, class: "10-A", address: "Ahmedabad, Gujarat" },
    { name: "Arjun Reddy",     marks: 47, class: "8-B",  address: "Hyderabad, Telangana" },
  ];
 
  const cardGrid = document.getElementById("cardGrid");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultCount = document.getElementById("resultCount");
 
  function initials(name) {
    return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }
 
  // ---------- Render (uses .map) ----------
  function renderCards(list) {
    resultCount.textContent = `${list.length} student${list.length !== 1 ? "s" : ""}`;
 
    if (list.length === 0) {
      cardGrid.innerHTML = `<div class="no-results">No students match that search.</div>`;
      return;
    }
 
    // map() transforms each student object into an HTML string
    const cardsHTML = list
      .map(
        (s) => `
        <div class="card">
          <div class="avatar">${initials(s.name)}</div>
          <h3>${s.name}</h3>
          <span class="class-tag">Class ${s.class}</span>
          <div class="detail-row">
            <span class="label">Marks</span>
            <span class="value ${s.marks >= 60 ? "marks-good" : "marks-low"}">${s.marks}%</span>
          </div>
          <div class="detail-row">
            <span class="label">Class</span>
            <span class="value">${s.class}</span>
          </div>
          <div class="detail-row">
            <span class="label">Address</span>
            <span class="value">${s.address}</span>
          </div>
        </div>`
      )
      .join("");
 
    cardGrid.innerHTML = cardsHTML;
  }
 
  // ---------- Search (uses .filter) ----------
  function runSearch() {
    const query = searchInput.value.trim().toLowerCase();
 
    // filter() keeps only students whose name, class, or address matches the query
    const results = students.filter((s) => {
      return (
        s.name.toLowerCase().includes(query) ||
        s.class.toLowerCase().includes(query) ||
        s.address.toLowerCase().includes(query)
      );
    });
 
    renderCards(results);
  }
 
  searchBtn.addEventListener("click", runSearch);
  searchInput.addEventListener("input", runSearch); // live filtering as you type
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
  });
 
  // initial render
  renderCards(students);

