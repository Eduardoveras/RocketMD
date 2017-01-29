json.extract! patient, :id, :first_name, :last_name, :identification, :date_of_birth, :male, :address, :phone, :alt_phone, :email, :created_at, :updated_at
json.url patient_url(patient, format: :json)