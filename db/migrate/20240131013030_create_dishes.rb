class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :description
      t.float :price
      t.string :picture_url
      t.boolean :is_gluten
      t.boolean :is_vegeterian
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
