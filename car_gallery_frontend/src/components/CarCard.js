class CarCard {
    static container = document.getElementById("car-collection");

    constructor(car){
        this.car = car;
        this.render()
        this.attachEventListener();
    }

    static getAll () {
        this.container.innerHTML = "";
        api.getAllCars().then((data) => 
            data.forEach((car) => new CarCard(car))
        );
    }

    static getAllByCategory (id) {
        this.container.innerHTML = "";
        api.getCarsByCategory(id).then((data) => 
            data.forEach((car) => new CarCard(car))
        );
    }

    attachEventListener() {
        this.card.addEventListener("click", this.handleOnClick);
    }

    handleOnClick = (event) => {
        if (event.target.className == "upVt-btn") {
             const id = this.card.dataset.id;
             api.updateVotes(id, "upvote").then((car) => this.upVotesHTML(car.likes));
        } if (event.target.className == "downVt-btn") {
            const id = this.card.dataset.id;
            api.updateVotes(id, "downvote").then((car) => this.downVotesHTML(car.dislikes));
        } if (event.target.className == "delete-btn") {
            const id = this.card.dataset.id;
            api.deleteCar(id).then((car) => this.card.remove())
        }
    };

    upVotesHTML = (number) => {
        this.card.children[3].innerHTML = `${number} Upvotes`;
    };

    downVotesHTML = (number) => {
        this.card.children[4].innerHTML = `${number} Downvotes`;
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
        const {year, make, model, image, likes, dislikes, category } = this.car;

        this.card.innerHTML = `
        <h2>${year} ${make} ${model}</h2>
        <p>${category.name}</p>
        <img src=${image || "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg"} class="car-avatar" />
        <div>${likes} Upvotes</div> 
        <div>${dislikes} Downvotes</div>
        <button class="upVt-btn">Upvote</button>
        <button class="downVt-btn">Downvote</button>
        <button style="background-color:red;"class="delete-btn">Delete</button>
        `;
    }
} 
    
    