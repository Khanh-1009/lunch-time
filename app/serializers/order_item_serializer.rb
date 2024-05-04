class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :dish_id, :cart_id, :quantity, :dish, :items_cost

  belongs_to :cart
  belongs_to :dish
end
