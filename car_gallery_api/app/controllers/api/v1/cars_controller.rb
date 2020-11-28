class Api::V1::CarsController < ApplicationController
    def index
        @cars = Api::V1::Car.all
        render json: @cars, except: [:created_at, :updated_at]
    end

    def create
        @car = Api::V1::Car.create(car_params)
        @car.likes = 0
        @car.save
        render json: @car, except: [:created_at, :updated_at]
    end

    def update
        @car = Api::V1::Car.find_by_id(params[:id])
        @car.update(likes: @car.likes + 1)
        render json: @car, except: [:created_at, :updated_at]
    end

    def destroy
        @car = Api::V1::Car.find_by_id(params[:id])
        @car.destroy
        render json: @car, except: [:created_at, :updated_at]
    end

    private 

    def car_params
        params.require(:car).permit(:year, :make, :model, :image)
    end
end