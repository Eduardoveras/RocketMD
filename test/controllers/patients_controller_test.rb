require 'test_helper'

class PatientsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @patient = patients(:one)
  end

  test "should get index" do
    get patients_url
    assert_response :success
  end

  test "should get new" do
    get new_patient_url
    assert_response :success
  end

  test "should create patient" do
    assert_difference('Patient.count') do
      post patients_url, params: { patient: { address: @patient.address, alt_phone: @patient.alt_phone, blood_type: @patient.blood_type, city: @patient.city, country: @patient.country, date_of_birth: @patient.date_of_birth, email: @patient.email, first_name: @patient.first_name, identification: @patient.identification, insurance_company: @patient.insurance_company, insurance_number: @patient.insurance_number, insurance_plan: @patient.insurance_plan, last_name: @patient.last_name, male: @patient.male, nationality: @patient.nationality, occupation: @patient.occupation, phone: @patient.phone, religion: @patient.religion } }
    end

    assert_redirected_to patient_url(Patient.last)
  end

  test "should show patient" do
    get patient_url(@patient)
    assert_response :success
  end

  test "should get edit" do
    get edit_patient_url(@patient)
    assert_response :success
  end

  test "should update patient" do
    patch patient_url(@patient), params: { patient: { address: @patient.address, alt_phone: @patient.alt_phone, blood_type: @patient.blood_type, city: @patient.city, country: @patient.country, date_of_birth: @patient.date_of_birth, email: @patient.email, first_name: @patient.first_name, identification: @patient.identification, insurance_company: @patient.insurance_company, insurance_number: @patient.insurance_number, insurance_plan: @patient.insurance_plan, last_name: @patient.last_name, male: @patient.male, nationality: @patient.nationality, occupation: @patient.occupation, phone: @patient.phone, religion: @patient.religion } }
    assert_redirected_to patient_url(@patient)
  end

  test "should destroy patient" do
    assert_difference('Patient.count', -1) do
      delete patient_url(@patient)
    end

    assert_redirected_to patients_url
  end
end
