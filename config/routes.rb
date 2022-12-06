Rails.application.routes.draw do
  resources :bookings ,only:[:create,:index]
  resources :owners ,only:[:index]
  resources :users
  resources :houses
  get '.houses/:house_type' ,to: "house#show"
  get '/login',to: "sessions#create"
  get '/me',to: "users#show"
  get '/logout',to: "sessions#destroy"
end
