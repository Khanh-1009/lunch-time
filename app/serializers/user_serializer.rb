class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :company_id

  belongs_to :company
end
