Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  resources :companies
  resources :restaurants
  resources :dishes
  resources :users
  resources :feedbacks

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
