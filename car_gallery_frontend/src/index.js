let addCar = false;
const api = new ApiService("http://localhost:3000/api/v1");

document.addEventListener("DOMContentLoaded", () => {
    let category = document.getElementById("category_id")
    category.addEventListener("change", () => {
        const id = event.target.value;
        CarCard.getAllByCategory(id);
    })
    let reset = document.getElementById("reset")
    reset.addEventListener("click", () => {
        CarCard.getAll();
    })
    CarCard.getAll();
    new CarForm();
    const addBtn = document.querySelector("#new-car-btn");
    const carFormContainer = document.querySelector(".container");
    addBtn.addEventListener("click", () => {
        // hide & seek with the form
        addCar = !addCar;
        if (addCar) {
            carFormContainer.style.display = "block";
        } else {
            carFormContainer.style.display = "none";
        }
    });
});