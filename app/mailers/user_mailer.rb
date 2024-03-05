class UserMailer < ApplicationMailer
    default from: 'notifications@example.com'

    def welcome_email (user)
      @user = user
      @specialtext = `Hello #{user}, thanks for chosing Happy Lunch! We hope you will enjoy everyday lunch like it is from your own kitchen.`
      mail(to: `#{user.email}`, subject: 'Welcome to Happy Lunch')
    end
end
