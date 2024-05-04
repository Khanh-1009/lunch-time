class OrderItemsController < ApplicationController

    def create
        order_item = current_cart.order_items.create(order_item_params)
        session[:cart_id] = current_cart.id
        render json: order_item
    end

    def update
        order_item = current_cart.order_items.find(params[:id])
        order_item.update(order_item_params)
        render json: order_item
    end

    def destroy
        order_item = current_cart.order_items.find(params[:id])
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
end
