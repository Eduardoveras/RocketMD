class CreateJoinTableClinicUser < ActiveRecord::Migration[5.0]
  def change
    create_join_table :Clinics, :Users do |t|
       t.index [:clinic_id, :user_id]
       t.index [:user_id, :clinic_id]
    end
  end
end
