require 'test_helper'

class ClinicsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @clinic = clinics(:one)
  end

  test "should get index" do
    get clinics_url
    assert_response :success
  end

  test "should get new" do
    get new_clinic_url
    assert_response :success
  end

  test "should create clinic" do
    assert_difference('Clinic.count') do
      post clinics_url, params: { clinic: {  } }
    end

    assert_redirected_to clinic_url(Clinic.last)
  end

  test "should show clinic" do
    get clinic_url(@clinic)
    assert_response :success
  end

  test "should get edit" do
    get edit_clinic_url(@clinic)
    assert_response :success
  end

  test "should update clinic" do
    patch clinic_url(@clinic), params: { clinic: {  } }
    assert_redirected_to clinic_url(@clinic)
  end

  test "should destroy clinic" do
    assert_difference('Clinic.count', -1) do
      delete clinic_url(@clinic)
    end

    assert_redirected_to clinics_url
  end
end
