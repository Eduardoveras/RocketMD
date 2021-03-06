class Clinic < ApplicationRecord
  validates_presence_of :name

  has_and_belongs_to_many :patients
  has_and_belongs_to_many :users
  has_paper_trail
end
