class Game < ActiveRecord::Base
  # Remember to create a migration!
  has_many :attempts
  has_many :players, through: :attempts
end
