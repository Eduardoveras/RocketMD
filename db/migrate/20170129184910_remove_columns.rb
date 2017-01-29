class RemoveColumns < ActiveRecord::Migration[5.0]
  def self.up
    remove_column :patients, :occupation
    remove_column :patients, :religion
    remove_column :patients, :country
    remove_column :patients, :city
    remove_column :patients, :nationality
    remove_column :patients, :blood_type
    remove_column :patients, :insurance_company
    remove_column :patients, :insurance_number
    remove_column :patients, :insurance_plan
  end
end
