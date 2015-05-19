json.array!(@adverts) do |advert|
  json.extract! advert, :id, :name, :description, :picture, :ad_type, :longitude, :latitude
  json.url advert_url(advert, format: :json)
end
