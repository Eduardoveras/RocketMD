class RenameJoinTables < ActiveRecord::Migration[5.0]
  def self.up
    rename_table :Clinics_Users, :clinics_users
    rename_table :Clinics_Patients, :clinics_patients
  end

  def self.down
    rename_table :clinics_users, :Clinics_Users
    rename_table :clinics_patients, :Clinics_Patients
  end
end
