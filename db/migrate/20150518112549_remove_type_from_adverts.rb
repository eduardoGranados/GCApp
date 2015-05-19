class RemoveTypeFromAdverts < ActiveRecord::Migration
  def change
    remove_column :adverts, :type, :string
  end
end
