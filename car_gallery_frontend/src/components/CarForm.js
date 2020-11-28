class CarForm {
    static container = document.querySelector(".container");

    constructor() {
        this.render();
        this.attachEventLister();
    }

    attachEventLister() {
        this.form.addEventListener("submit", this.handleOnSubmit);
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        const { year, make, model, image } = event.target;
        const data = {
            year: year.value,
            make: make.value,
            model: model.value,
            image: image.value,
        };
        api.createCar(data).then((car) => new CarCard(car));
    };

    render() {
        const form = document.createElement("form");
        form.className = "add-toy-form";
        form.innerHTML = this.renderInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }

    renderInnerHTML = () => {
        return `
        <h3>Add a new car!</h3>
        <input
            type="text"
            name="year"
            value=""
            placeholder="Enter the car's year..."
            class="input-text"
        />
        <input
            type="text"
            name="make"
            value=""
            placeholder="Enter the car's make..."
            class="input-text"
        />
        <input
            type="text"
            name="model"
            value=""
            placeholder="Enter the car's model..."
            class="input-text"
        />
        <br />
        <input
            type="text"
            name="image"
            value=""
            placeholder="Enter the car's image URL..."
            class="input-text"
        />
        <br />
        <input
            type="submit"
            name="submit"
            value="Save your car!!"
            class="submit"
        />
        `;
    };
}