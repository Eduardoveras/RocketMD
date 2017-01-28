class PatientsController < ApplicationController
  before_action :set_patient, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!


  # GET /patients
  # GET /patients.json
  def index
    @page_title='Patients'
    @patients = current_user.patients
  end

  # GET /patients/1
  # GET /patients/1.json
  def show
    @page_title='Patient Details'
  end

  # GET /patients/new
  def new
    @page_title='Create new patient'
    @patient = Patient.new
  end

  # GET /patients/1/edit
  def edit
    @page_title='Edit Patient'
  end

  # POST /patients
  # POST /patients.json
  def create
    @patient = Patient.new(patient_params)

    respond_to do |format|
      if @patient.save
        format.html { redirect_to @patient, notice: 'Patient was successfully created.' }
        format.json { render :show, status: :created, location: @patient }
      else
        format.html { render :new }
        format.json { render json: @patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /patients/1
  # PATCH/PUT /patients/1.json
  def update
    respond_to do |format|
      if @patient.update(patient_params)
        format.html { redirect_to @patient, notice: 'Patient was successfully updated.' }
        format.json { render :show, status: :ok, location: @patient }
      else
        format.html { render :edit }
        format.json { render json: @patient.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /patients/1
  # DELETE /patients/1.json
  def destroy
    @patient.destroy
    respond_to do |format|
      format.html { redirect_to patients_url, notice: 'Patient was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_patient
      @patient = Patient.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def patient_params
      params.require(:patient).permit(:first_name, :last_name, :identification, :date_of_birth, :male, :occupation, :religion, :country, :city, :address, :nationality, :blood_type, :phone, :alt_phone, :email, :insurance_number, :insurance_company, :insurance_plan)
    end
end
