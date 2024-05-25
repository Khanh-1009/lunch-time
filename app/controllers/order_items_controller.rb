class OrderItemsController < ApplicationController

    def create
        order_item = current_cart.order_items.new(order_item_params)
        existing_item = current_cart.order_items.all.find{|item| item.dish_id == order_item.dish_id}
        if existing_item
            existing_item.update(quantity: existing_item.quantity + 1)
            render json: existing_item
        else
            order_item.save
            session[:cart_id] = current_cart.id
            render json: order_item
        end
    end


    def update
        order_item = current_cart.order_items.find(params[:id])
        order_item.update(quantity: params[:quantity])
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
