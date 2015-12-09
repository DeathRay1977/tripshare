Rails.application.routes.draw do
  resources :configs
  resources :trips do
    resources :points
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
