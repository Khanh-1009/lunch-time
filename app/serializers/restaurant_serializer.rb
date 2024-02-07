class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :image_url

  has_many :dishes
end
