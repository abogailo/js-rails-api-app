class CreateCourseTags < ActiveRecord::Migration[6.0]
  def change
    create_table :course_tags do |t|
      t.integer :course_id
      t.integer :tag_id

      t.timestamps
    end
  end
end
