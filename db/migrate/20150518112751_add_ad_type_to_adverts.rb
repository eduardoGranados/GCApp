class AddAdTypeToAdverts < ActiveRecord::Migration
  def change
    add_column :adverts, :ad_type, :string
  end
end
