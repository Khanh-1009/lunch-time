class UsersController < ApplicationController
    skip_before_action :authorize
    def index
        users = User.all 
        render json: users
    end
    
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id 
            cart = Cart.create(user_id: session[:user_id])
            session[:cart_id] = cart.id
            UserMailer.with(user: user).welcome_message.deliver_now
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    private 
    def user_params
        params.permit(:username, :email, :company_id, :password, :password_confirmation)
    end
end

