class BookingsController < ApplicationController
    def create
        booking=Booking.create(booking_params)
        render json: booking
    end
    private
    def booking_params
        params.permit(:name,:house_id,:check_in_date,:check_out_date,:No_of_people,:total)
    end
end
