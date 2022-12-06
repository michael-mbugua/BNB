class Booking < ApplicationRecord
    validates :checkIn, presence: true
    validates :checkOut, presence:true
end
