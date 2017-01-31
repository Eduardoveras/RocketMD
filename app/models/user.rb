class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  has_and_belongs_to_many :clinic

  has_many :patients, through: :clinic

  accepts_nested_attributes_for :clinic

  #TODO: Implement "accepts_nested_attributes_for:" method, and update registration form


end
