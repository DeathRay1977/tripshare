class DropTripsPointsTable < ActiveRecord::Migration
  def change
    drop_table :trips_points
  end
end
