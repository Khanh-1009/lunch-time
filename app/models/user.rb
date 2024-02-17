class User < ApplicationRecord
    has_secure_password
    validates :username, :email, :company_id, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true

    belongs_to :company
end

