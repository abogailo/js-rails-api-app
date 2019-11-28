class RemoveFromCourse < ActiveRecord::Migration[6.0]
  def change
    remove_column :courses, :section_id, :references
  end
end
