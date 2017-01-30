class Patient < ApplicationRecord
  validates_presence_of :first_name, :last_name, :identification, :date_of_birth
  validate :not_future_date

  has_and_belongs_to_many :clinic

  def name
    first_name.to_s + " "+ last_name.to_s.capitalize
  end


  def not_future_date
    unless self.date_of_birth.past?
      errors.add(:date, 'not in past')
    end
  end

end
