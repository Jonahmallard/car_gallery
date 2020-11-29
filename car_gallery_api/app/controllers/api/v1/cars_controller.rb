class Api::V1::CarsController < ApplicationController
    def index
        @cars = Car.all
        render json: @cars
    end

    def create
        @car = Car.create(car_params)
        @car.likes = 0
        @car.category_id = 1
        @car.save
        render json: @car
    end

    def update
        @car = Car.find_by_id(params[:id])
        @car.update(likes: @car.likes + 1)
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