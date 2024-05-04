class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]
    
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            cart = Cart.find_by(user_id: session[:user_id])
            session[:cart_id] = cart.id
            render json: user, status: :created
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
