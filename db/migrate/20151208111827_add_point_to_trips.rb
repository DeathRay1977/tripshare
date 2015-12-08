class AddPointToTrips < ActiveRecord::Migration
  def change
    add_reference :trips, :point, index: true, foreign_key: true
  end
end
