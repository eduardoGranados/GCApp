class CreateAdverts < ActiveRecord::Migration
def change
  create_table :adverts do |t|
    t.string :name
    t.text :description
    t.string :picture
    t.string :type
    t.string :longitude
    t.string :latitude

    t.timestamps null: false
  end


end
end
