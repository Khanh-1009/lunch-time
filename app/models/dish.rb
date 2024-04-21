class Dish < ApplicationRecord
    belongs_to :restaurant
    has_many :order_items
    has_many :carts, through: :order_items

end
