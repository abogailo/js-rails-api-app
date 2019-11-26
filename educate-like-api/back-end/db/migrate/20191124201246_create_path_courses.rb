class CreatePathCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :path_courses do |t|
      t.integer :path_id
      t.integer :course_id

      t.timestamps
    end
  end
end
