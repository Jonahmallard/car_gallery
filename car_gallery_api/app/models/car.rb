class Car < ApplicationRecord
    belongs_to :category
    validates :year, :make, :model, presence: true
end
