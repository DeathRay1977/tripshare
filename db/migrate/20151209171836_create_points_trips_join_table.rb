class CreatePointsTripsJoinTable < ActiveRecord::Migration
  def change
    create_table :points_trips, id: false do |t|
      t.integer :trip_id
      t.integer :point_id
    end

    add_index :points_trips, :trip_id
    add_index :points_trips, :point_id
  end
end
