Rails.application.routes.draw do
  resources :tags
  resources :paths
  resources :courses do
    resources :sections
  end

  root 'courses#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
