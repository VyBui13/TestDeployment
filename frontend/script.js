
async function getChovy(name, age) {
    const response = await fetch(`/chovy?name=${name}&age=${age}`);
    const data = await response.json();
    console.log(data);
}

var globalCity;

async function getDB() {
    const response = await fetch("http://localhost:9090/api/test/db");

    const data = await response.json();
    globalCity = data;
    importData(globalCity);
    console.log(data);
};

function importData(posts) {
    var htmls = posts.map((post) => {
        return `<li>
            <h2>${post.name}</h2>
            <p>${post.email}</p>
        </li>`;
    }
    )

    var html = htmls.join("");
    document.getElementById("data").innerHTML = html;
}

async function postData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    await fetch("http://localhost:9090/api/test/db", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, email: email, password: "password" }),
    });

    console.log("------------------");
}

getDB();







