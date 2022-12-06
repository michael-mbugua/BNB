Rails.application.routes.draw do
  resources :bookings ,only:[:create,:index]
  resources :owners ,only:[:index]
  resources :users
  resources :houses
  get '.houses/:house_type' ,to: "house#show"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
