class DishesController < ApplicationController
    skip_before_action :authorize
    def index
        dishes = Dish.all
        render json: dishes
    end
end
