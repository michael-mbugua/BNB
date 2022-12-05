class HouseSerializer < ActiveModel::Serializer
  attributes :id, :house_type,:image,:beds,:price,:location,:description,:ratings,:capacity,:owner_id
end
