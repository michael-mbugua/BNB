Rails.application.routes.draw do
  resources :bookings ,only:[:create,:index]
  resources :owners ,only:[:index,:show]
  resources :users
  resources :houses
  get '.houses/:house_type' ,to: "house#show"
  # users login in and staying logged in
  post '/login',to: "sessions#create"  
  get '/me',to: "users#show"
  # users loging out route
  delete '/logout',to: "sessions#destroy"

  # admin login in
  post '/admin', to: "admins#create"
  get '/me',to: "owners#show"
  # admin logging out
  delete '/logout',to: "admins#destroy"

end
