class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_one :point
end
