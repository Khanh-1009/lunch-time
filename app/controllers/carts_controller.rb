class CartsController < ApplicationController
  skip_before_action :authorize

  def index
    carts = Cart.all
    render json: carts
  end

  def my_cart
    @found_cart = Cart.find_by(user_id: session[:user_id])
    render json: @found_cart
  end


    # def findUserCart
    #     @found_cart = Cart.find_by(user_id: params[:user_id])
    #     if @found_cart
    #       render json: @found_cart
    #     else
    #       render json: {error: "The user has no cart"}
    #     end
    # end
end
