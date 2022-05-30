const url = "http://localhost:8080/api/riders"

async function loadRiders(){
  const table = document.getElementById("riderTable");

  await fetch(url).then(res => res.json()).then(riders => {
    for (let i = 0; i < riders.length; i++){
      let row = "<tr>" +
                    "<td>" + riders[i].riderName + "</td>" +
                    "<td>" + riders[i].mtnPoints + "</td>" +
                    "<td>" + riders[i].sprintPoints + "</td>" +
                    "<td>" + riders[i].totalTime + "</td>" +
                    "<td><button class='btn btn-danger' id='delete-btn'>Delete</button></td>" +
                "</tr>"
      table.innerHTML += row;
    }
    localStorage.setItem("riders", JSON.stringify(riders));
  })
}





/*
async function loadRiders(){
  const response = await fetch(url);
  const riders = await response.json();

  console.log(riders)
}

loadRiders();
*/

