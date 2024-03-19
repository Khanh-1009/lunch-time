class Feedback < ApplicationRecord
    validates :subject, :feedback, presence: true 
    validates :feedback, length: {maximum: 1000}

    belongs_to :user
end
