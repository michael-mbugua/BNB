class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.text :email
      t.integer :phone_number
      t.integer :house_id
      t.timestamps
    end
  end
end
