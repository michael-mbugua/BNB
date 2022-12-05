class User < ApplicationRecord
    belongs_to :house 
    belongs_to :owner
    has_many :bookings
end
