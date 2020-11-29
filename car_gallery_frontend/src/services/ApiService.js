class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getAllCars = () => fetch(`${this.baseURL}/cars`).then(res => res.json());

    updateVotes = (id) => fetch(`${this.baseURL}/cars/${id}`, { method: "PATCH" }).then((res) => res.json());

    createCar = (data) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data)
        };
        return fetch(`${this.baseURL}/cars`, config).then((res) => res.json());
    }

    deleteCar = (id) => fetch(`${this.baseURL}/cars/${id}`, { method: "DELETE" }).then((res) => res.json());
}