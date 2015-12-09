class AddPlaceidToPoints < ActiveRecord::Migration
  def change
    add_column :points, :placeid, :string
  end
end
