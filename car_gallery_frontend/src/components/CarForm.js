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
        const { year, make, model, image, category_id } = event.target;
        const data = {
            year: year.value,
            make: make.value,
            model: model.value,
            image: image.value,
            category_id: category_id.value
        };
        api.createCar(data).then((car) => new CarCard(car));
    };

    render() {
        const form = document.createElement("form");
        form.className = "add-car-form";
        form.innerHTML = this.renderInnerHTML();
        this.form = form;
        this.constructor.container.append(form);
    }

    renderInnerHTML = () => {
        return `
        <div>Category: </div>
        <select name="category_id">
            <option value="1">Car</option>
            <option value="2">Truck</option>
            <option value="3">Recreational Vehicle</option>
        </select>
        <br />
        <input
            type="text"
            name="year"
            value=""
            placeholder="Enter the vehicle's Year"
            class="input-text"
        />
        <input
            type="text"
            name="make"
            value=""
            placeholder="Make"
            class="input-text"
        />
        <input
            type="text"
            name="model"
            value=""
            placeholder="Model"
            class="input-text"
        />
        <br />
        <input
            type="text"
            name="image"
            value=""
            placeholder="and Image URL"
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