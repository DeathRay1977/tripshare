class RemovePointIdFromTrips < ActiveRecord::Migration
  def change
    remove_column :trips, :point_id
  end
end
