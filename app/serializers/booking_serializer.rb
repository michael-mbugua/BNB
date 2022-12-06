class BookingSerializer < ActiveModel::Serializer
  attributes :id,:name,:checkIn,:checkOut,:persons,:total
end
