class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :company_id, :user_company, :feedbacks_count

  belongs_to :company
  has_many :feedbacks


end
