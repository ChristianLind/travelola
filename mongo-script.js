let url = `mongodb://localhost:27017/Travelling`;

async function getData() {
    const response = await fetch(url);
    const body = await response.json();
    return transformToArray(body);
}

async function getSpecificTravel(id) {
    const response = await fetch(url + "/" + id);
    const body = await response.json();
    console.log(body);
}

async function postData(travel) {
    const response = await fetch(url + ".json", {
        method: "POST",
        body: JSON.stringify(travel),
    });
    return response;
}