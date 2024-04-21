class UserMailer < ApplicationMailer
    default from: 'notifications@example.com'

    def welcome_message
      @user = params[:user]
      mail to: @user.email, subject: 'Thanks for Registering to Yumilicious!'
    end

    def feedback_response_message
      @user = params[:user]
      mail to: @user.email, subject: "We've received your feedback."
    end
    # def welcome_email (user)
    #   @user = user
    #   @specialtext = `Hello #{user}, thanks for chosing Happy Lunch! We hope you will enjoy everyday lunch like it is from your own kitchen.`
    #   mail(to: `#{user.email}`, subject: 'Welcome to Happy Lunch')
    # end
end
