class CartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :item_counts

  belongs_to :user
  has_many :order_items
  has_many :dishes, through: :order_items
end
