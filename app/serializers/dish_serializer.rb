class DishSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :picture_url, :is_gluten, :is_vegeterian, :restaurant_id

  belongs_to :restaurant
  has_many :order_items
  has_many :carts, through: :order_items
end
