class Api::V1::CarsController < ApplicationController
    def index
        @cars = Car.all
        render json: @cars
    end

    def create
        @car = Car.create(car_params)
        @car.likes = 0
        @car.dislikes = 0
        @car.category_id = 1
        @car.save
        render json: @car
    end

    def update
        @car = Car.find_by_id(params[:id])
        if (!@car.likes)
            @car.update(likes: @car.likes + 1)
        else 
            @car.update(dislikes: @car.dislikes + 1)
        end
        render json: @car
    end

    def destroy
        @car = Car.find_by_id(params[:id])
        @car.destroy
        render json: @car
    end

    private 

    def car_params
        params.require(:car).permit(:year, :make, :model, :image, :category_id)
    end
end