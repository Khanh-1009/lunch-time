Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/my-cart', to: 'carts#my_cart'

  resources :companies
  resources :restaurants
  resources :dishes
  resources :users
  resources :feedbacks
  resources :carts
  resources :order_items

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
