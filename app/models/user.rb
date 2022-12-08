class User < ApplicationRecord
    belongs_to :house 
    validates :name ,presence: true
    validates :email, presence: true,uniqueness: true

end
