const el = document.getElementById("goBtn");
el.addEventListener("click", (ev) => {
    const inp = document.getElementById("numInput");
    let tableBody = document.querySelector("#tableBody");
    const theParent = document.querySelector("#list-contents");
    const len = inp.valueAsNumber;

    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.lastChild);
    }

    fetch(`https://randomuser.me/api?results=${len}`)
    .then(r => r.json())
    .then((d) =>{
        const inp = document.getElementById("numInput");
    const theParent = document.querySelector("#list-contents");
    let victims = document.querySelectorAll(".listItem");

    console.log("Got some data",d);

    let len = inp.valueAsNumber;
    for (let k = 0; k < len; k++) {
        let tableRow = document.createElement("tr");
        let listItem = document.createElement("td");
        let listValue = document.createTextNode(d.results[k].name.first + " " + d.results[k].name.last);
        listItem.classList.add("listItem");
        listItem.classList.add("name");
        listItem.appendChild(listValue);
        tableRow.appendChild(listItem);

        listItem = document.createElement("td");
        listValue = document.createTextNode(d.results[k].cell);
        listItem.classList.add("listItem");
        listItem.classList.add("remove");
        listItem.appendChild(listValue);
        tableRow.appendChild(listItem);

        listItem = document.createElement("td");
        listValue = document.createTextNode(d.results[k].dob.date);
        listItem.classList.add("listItem");
        listItem.classList.add("remove");
        listItem.appendChild(listValue);
        tableRow.appendChild(listItem);

        listItem = document.createElement("td");
        listValue = document.createElement("img");
        listValue.setAttribute("src", d.results[k].picture.thumbnail);
        listItem.classList.add("listItem");
        listItem.classList.add("remove");
        listItem.appendChild(listValue);
        tableRow.appendChild(listItem);

        tableBody.appendChild(tableRow);
    }
    });
});