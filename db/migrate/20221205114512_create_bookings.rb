class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :name
      t.date :checkIn
      t.date :checkOut
      t.integer :persons
      t.integer :total
      t.timestamps
    end
  end
end
