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
        params.permit(:name,:house_id,:checkIn,:checkOut,:No_of_people,:total)
    end
end
