class House < ApplicationRecord
    has_many :users
    belongs_to :owner 
    
end
