class CreateHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :houses do |t|
      t.string :house_type
      t.text :image
      t.integer :beds
      t.integer :price
      t.string :location
      t.string :description
      t.decimal :ratings
      t.integer :capacity
      t.integer :owner_id
      t.timestamps
    end
  end
end
