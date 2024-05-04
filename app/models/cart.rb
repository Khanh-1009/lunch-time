class Cart < ApplicationRecord
    belongs_to :user
    has_many :order_items
    has_many :dishes, through: :order_items

    def item_counts
        order_items.map {|item| item.quantity}.sum
    end

    def subtotal
        order_items.map {|item| item.items_cost}.sum.round(2)
    end

    def tax 
        sub = order_items.map {|item| item.items_cost}.sum
        ((sub*7.25)/100).round(2)
    end

    def total 
        sub = order_items.map {|item| item.items_cost}.sum
        tax = ((sub*7.25)/100)
        (sub + tax).round(2)
    end
end
