class CarCard {
    static container = document.getElementById("car-collection");

    constructor(car){
        this.car = car;
        this.render()
        this.attachEventListener();
    }

    static getAll () {
        api.getAllCars().then((data) => 
            data.forEach((car) => new CarCard(car))
        );
    }

    attachEventListener() {
        this.card.addEventListener("click", this.handleOnClick);
    }

    handleOnClick = (event) => {
        if (event.target.className == "like-btn") {
             const id = this.card.dataset.id;
             api.updateLikes(id).then((car) => this.updateLikesHTML(car.likes));
        } if (event.target.className == "delete-btn") {
            const id = this.card.dataset.id;
            api.deleteCar(id).then((car) => this.card.remove())
        }
    };

    updateLikesHTML = (number) => {
        this.card.children[2].innerHTML = `${number} Likes`;
    };

    render() {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.id = this.car.id;
        this.card = card;
        this.renderInnerHTML()
        this.constructor.container.append(card);
    }

    renderInnerHTML() {
        const {year, make, model, image, likes} = this.car;

        this.card.innerHTML = `
        <h2>${year} ${make} ${model}</h2>
        <img src="${image}" class="car-avatar" />
        <p>${likes} Likes</p>
        <button class="like-btn">Like <3</button>
        <button class="delete-btn">Delete</button>
        `;
    }
} 
    
    