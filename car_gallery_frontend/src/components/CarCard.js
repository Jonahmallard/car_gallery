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
        if (event.target.className == "upVt-btn") {
             const id = this.card.dataset.id;
             api.updateVotes(id).then((car) => this.upVotesHTML(car.likes));
        } if (event.target.className == "downVt-btn") {
            const id = this.card.dataset.id;
            api.updateVotes(id).then((car) => this.downVotesHTML(car.dislikes));
        } if (event.target.className == "delete-btn") {
            const id = this.card.dataset.id;
            api.deleteCar(id).then((car) => this.card.remove())
        }
    };

    upVotesHTML = (number) => {
        this.card.children[2].innerHTML = `${number} Upvotes | ${number} Downvotes`;
    };

    downVotesHTML = (number) => {
        this.card.children[2].innerHTML = `${number} Upvotes | ${number} Downvotes`;
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
        const {year, make, model, image, likes, dislikes} = this.car;

        this.card.innerHTML = `
        <h2>${year} ${make} ${model}</h2>
        <img src="${image}" class="car-avatar" />
        <p>${likes} Upvotes <strong>&</strong> <span>${dislikes} Downvotes</span></p>
        <button class="upVt-btn">Upvote</button>
        <button class="downVt-btn">Downvote</button>
        <button style="background-color:red;"class="delete-btn">Delete</button>
        `;
    }
} 
    
    