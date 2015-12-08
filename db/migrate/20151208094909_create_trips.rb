class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :name
      t.string :location
      t.references :point, index: true, foreign_key: true

      t.timestamps
    end
  end
end
