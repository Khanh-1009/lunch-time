class User < ApplicationRecord
    has_secure_password
    validates :username, :email, :company_id, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true

    belongs_to :company
    has_many :feedbacks
    has_one :cart

    def user_company
        company.name
    end

    def feedbacks_count
        feedbacks.count
    end
end

