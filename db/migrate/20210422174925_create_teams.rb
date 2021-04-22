class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :team_id
      t.integer :avg_age_players

      t.timestamps
    end
  end
end
