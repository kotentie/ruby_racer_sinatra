class Player < ActiveRecord::Base
  # Remember to create a migration!
  has_many :attempts
  has_many :games, through: :attempts
end
