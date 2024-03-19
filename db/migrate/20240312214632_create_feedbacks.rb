class CreateFeedbacks < ActiveRecord::Migration[6.1]
  def change
    create_table :feedbacks do |t|
      t.string :subject
      t.string :feedback
      t.integer :rating
      t.integer :user_id

      t.timestamps
    end
  end
end
