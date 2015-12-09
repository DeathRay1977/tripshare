Rails.application.routes.draw do
  resources :configs
  resources :points
  resources :trips
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
