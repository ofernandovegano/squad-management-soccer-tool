class Team < ApplicationRecord
  validates :team_id, uniqueness: true
  validates :team_id, presence: true
end
