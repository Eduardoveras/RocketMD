class CreatePatients < ActiveRecord::Migration[5.0]
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :last_name
      t.string :identification
      t.date :date_of_birth
      t.boolean :male
      t.string :occupation
      t.string :religion
      t.string :country
      t.string :city
      t.string :address
      t.string :nationality
      t.string :blood_type
      t.string :phone
      t.string :alt_phone
      t.string :email
      t.string :insurance_number
      t.string :insurance_company
      t.string :insurance_plan

      t.timestamps
    end
  end
end
