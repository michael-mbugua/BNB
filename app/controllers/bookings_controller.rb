class BookingsController < ApplicationController
    def create
        booking=Booking.create(booking_params)
        render json: booking
    end
    def index
        render json: Booking.all
    end
    private
    def booking_params
        params.permit(:id,:name,:house_id,:checkIn,:checkOut,:persons,:total)
    end
end
