class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :name
      t.integer :house_id
      t.date :check_in_date
      t.date :check_out_date
      t.integer :No_of_people
      t.integer :total
      t.timestamps
    end
  end
end
