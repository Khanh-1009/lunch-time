class RestaurantsController < ApplicationController
    skip_before_action :authorize

    def index 
        restaurants = Restaurant.all 
        render json: restaurants
    end
end
