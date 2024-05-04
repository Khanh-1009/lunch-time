class CartsController < ApplicationController

  def index
    carts = Cart.all
    render json: carts
  end

  def my_cart
    found_cart = Cart.find_by(user_id: session[:user_id])
    if found_cart
      render json: found_cart
    else
      render json: {error: "The user has no cart"}, status: :not_found
    end
  end
end
