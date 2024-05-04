class OrderItem < ApplicationRecord
    belongs_to :cart
    belongs_to :dish

    def dish_detail
        dish
    end

    def items_cost
        (quantity * dish.price).round(2)
    end
end
