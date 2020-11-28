let addCar = false;
const api = new ApiService("http://localhost:3000/api/v1");

document.addEventListener("DOMContentLoaded", () => {
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