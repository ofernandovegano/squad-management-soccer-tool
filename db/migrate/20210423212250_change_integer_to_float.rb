class ChangeIntegerToFloat < ActiveRecord::Migration[6.0]
    def change
      change_column :teams, :avg_age_players, :float
    end
end
