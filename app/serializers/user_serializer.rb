class UserSerializer < ActiveModel::Serializer
  attributes :id,:name,:email,:phoneNumber,:house_id
end
