const form = document.querySelector("#travel-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const travel = {
        country: document.querySelector("#country").value,
        location: document.querySelector("#location").value,
        period: document.querySelector("#period").value,
        description: document.querySelector("#description").value,
    };

    const response = await postData(travel);
    console.log(response);

    if (response.status === 200) {
        clearForm();
        const newNode = fillTravelTemplate(travel);
        displayNewNode(newNode);
    }
});