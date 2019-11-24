class CreatePaths < ActiveRecord::Migration[6.0]
  def change
    create_table :paths do |t|
      t.string :title
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
