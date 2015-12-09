class AddRatingToPoints < ActiveRecord::Migration
  def change
    add_column :points, :rating, :float
  end
end
