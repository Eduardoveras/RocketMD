json.extract! appointment, :id, :patient_id, :datetime, :description, :created_at, :updated_at
json.url appointment_url(appointment, format: :json)