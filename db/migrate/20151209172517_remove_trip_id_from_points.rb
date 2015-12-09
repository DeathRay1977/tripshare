class RemoveTripIdFromPoints < ActiveRecord::Migration
  def change
    remove_column :points, :trip_id
  end
end
