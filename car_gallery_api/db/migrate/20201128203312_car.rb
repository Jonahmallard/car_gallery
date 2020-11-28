class Car < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.integer :year
      t.string :make
      t.string :model
      t.string :image
      t.integer :likes
      t.integer :category_id

      t.timestamps
    end
  end
end
