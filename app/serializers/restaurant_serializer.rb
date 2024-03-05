class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :image_url, :map_url

  has_many :dishes
end
