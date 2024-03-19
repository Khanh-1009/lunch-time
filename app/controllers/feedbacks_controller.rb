class FeedbacksController < ApplicationController
    def index
        feedbacks = Feedback.all
        render json: feedbacks
    end

    def create
        feedback = current_user.feedbacks.create!(feedback_params)
        UserMailer.with(user: current_user).feedback_response_message.deliver_now
        render json: feedback, status: :created
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def feedback_params
        params.permit(:subject, :feedback, :rating)
    end
end
