class FeedbackSerializer < ActiveModel::Serializer
  attributes :id, :subject, :feedback, :rating, :created_at

  belongs_to :user
end
