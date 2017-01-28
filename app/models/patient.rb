class Patient < ApplicationRecord
  validates_presence_of :first_name, :last_name, :identification, :date_of_birth
  belongs_to :user

end
