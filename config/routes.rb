Rails.application.routes.draw do
  root to: 'pages#home'
  
  get '/', to: 'pages#home'
  get '/new', to: 'pages#home'
  get '/reload_teams', to: 'pages#reload_teams'
  get '/reload_avg_age_players_part_one', to: 'pages#reload_avg_age_players_part_one'
  get '/reload_avg_age_players_part_two', to: 'pages#reload_avg_age_players_part_two'
  get '/reload_avg_age_players_part_three', to: 'pages#reload_avg_age_players_part_three'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :teams, only: [:index]
    end
  end
end
