window.addEventListener("load", async () => {
    await loadData();
});
  
async function loadData() {
    const travelListElement = document.querySelector("travel-list");
    travelListElement.innerHTML = "";
    const data = await getData();
    data.forEach((travel) => {
        const newNode = fillTravelTemplate(travel);
        displayNewNode(newNode);
    });
}
  
function fillTravelTemplate(travel) {

    const template = document.querySelector("#travel-card");

    const clone = document.importNode(template.content, true);

    clone.querySelector("#temp").id = travel.id;
    clone.querySelector("#country").textContent = travel.country;
    clone.querySelector("#location").textContent = travel.location;
    clone.querySelector("#period").textContent = travel.period;
    clone.querySelector("#description").textContent = travel.description;
    return clone;
}

function displayNewNode(newNode) {
    const travelList = document.querySelector("travel-list");
    travelList.appendChild(newNode);
}
  
function clearForm() {
    document.querySelector("#country").value = "";
    document.querySelector("#location").value = "";
    document.querySelector("#period").value = "";
    document.querySelector("#description").value = "";
}