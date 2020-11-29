class AddDislikesToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :dislikes, :integer
  end
end
