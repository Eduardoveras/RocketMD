class CreateAppointments < ActiveRecord::Migration[5.0]
  def change
    create_table :appointments do |t|
      t.references :patient, foreign_key: true
      t.datetime :datetime
      t.text :description

      t.timestamps
    end
  end
end
