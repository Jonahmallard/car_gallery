Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :cars 
      resources :categories do
        resources :cars, only: [:index]
      end
    end
  end
end