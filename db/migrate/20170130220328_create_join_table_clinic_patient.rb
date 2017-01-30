class CreateJoinTableClinicPatient < ActiveRecord::Migration[5.0]
  def change
    create_join_table :Clinics, :Patients do |t|
       t.index [:clinic_id, :patient_id]
       t.index [:patient_id, :clinic_id]
    end
  end
end
