class CreateTripsPointsJoinTable < ActiveRecord::Migration
  def change
    create_table :trips_points, id: false do |t|
      t.integer :trip_id
      t.integer :point_id
    end

    add_index :trips_points, :trip_id
    add_index :trips_points, :point_id
  end
end