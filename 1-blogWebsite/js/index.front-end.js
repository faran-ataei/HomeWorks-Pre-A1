const parentDiv = document.querySelector(".parent");

//! function for creating elements

const response = async () => {
  await fetch("../db/db.json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();

    })
    .then((data) => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
        //* building elements for title and posts
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");

        //* adding classes
        div.classList.add(`item-${i + 1}`, "items");
        div.setAttribute("id", `${data[i].title}`);

        //* adding content
        h2.textContent = data[i].title;
        p.textContent = data[i].post;

        //* appending elements
        div.appendChild(h2);
        div.appendChild(p);
        parentDiv.appendChild(div);
    }
    
    });
};

response();
