class Booking < ApplicationRecord
    validates :checkIn, presence: true
    validates :checkOut, presence: true
    validates :persons ,presence: true
end
