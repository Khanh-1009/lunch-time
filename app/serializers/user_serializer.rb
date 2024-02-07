class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, company_id

  belongs_to :company
end
