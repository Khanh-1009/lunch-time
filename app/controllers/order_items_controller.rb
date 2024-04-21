class OrderItemsController < ApplicationController

    def create
        order_item = current_cart.order_items.create(order_item_params)
        session[:cart_id] = current_cart.id
        render json: order_item
    end

    def delete_item
        order_item = current_cart.order_items.find_by(dish_id: params[:dish_id])
        order_item.destroy
        render json: order_item
    end

    private

    def current_cart
        Cart.find_by(user_id: session[:user_id])
    end

    def order_item_params
        params.permit(:dish_id, :quantity)
    end
    # def current_cart
    #     @cart = Cart.find_by(id: session[cart_id])
    #     if @cart
    #       render json: @cart
    #     else
    #       render json: {errors: ["The user has no cart"]}
    #     end
    # end
end
