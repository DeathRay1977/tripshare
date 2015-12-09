class CreateConfigs < ActiveRecord::Migration
  def change
    create_table :configs do |t|
      t.string :api_key

      t.timestamps
    end
  end
end
