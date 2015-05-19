class Advert < ActiveRecord::Base
  belongs_to :user

  validates :user, presence: true

  mount_uploader :picture, PictureUploader
end
