const olElement = document.querySelector("div > ol");

function getData() {
    try {
        fetch("../db/db.json")
            .then((res) => res.json())
            .then((data) => {
                data.forEach(element => {
                    const liElement = document.createElement("li");

                    const BMI = element.weight / ((element.height / 100) ** 2);
                    liElement.textContent = BMI.toFixed(3);
                    olElement.appendChild(liElement);
                });
            })
    } catch (error) {
        console.error(error);
    }
}

getData()