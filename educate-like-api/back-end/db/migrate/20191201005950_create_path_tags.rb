class CreatePathTags < ActiveRecord::Migration[6.0]
  def change
    create_table :path_tags do |t|
      t.integer :path_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
