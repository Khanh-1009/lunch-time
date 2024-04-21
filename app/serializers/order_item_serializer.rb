class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :dish_id, :cart_id, :quantity

  belongs_to :cart
  belongs_to :dish
end
