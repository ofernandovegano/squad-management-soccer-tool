Rails.application.routes.draw do
  root to: 'pages#home'
  
  get '/', to: 'pages#home'
  get '/new', to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :teams, only: [:index]
    end
  end
end
