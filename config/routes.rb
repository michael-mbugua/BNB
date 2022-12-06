Rails.application.routes.draw do
  resources :bookings ,only:[:create,:index]
  resources :owners ,only:[:index,:show]
  resources :users
  resources :houses
  get '.houses/:house_type' ,to: "house#show"
  # users login in and staying logged in
  get '/login',to: "sessions#create"  
  get '/me',to: "users#show"
  # users loging out route
  get '/logout',to: "sessions#destroy"

  # admin login in
  get '/admin', to: "admins#create"
  get '/me',to: "owners#show"
  # admin logging out
  get '/logout',to: "admins#destroy"

end
