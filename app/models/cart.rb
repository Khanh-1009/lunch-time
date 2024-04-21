class Cart < ApplicationRecord
    belongs_to :user
    has_many :order_items
    has_many :dishes, through: :order_items

    def item_counts
        order_items.count
    end
end
