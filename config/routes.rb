Rails.application.routes.draw do
  root to: 'pages#home'
  
  get '/', to: 'pages#home'
  get '/new', to: 'pages#home'
end
