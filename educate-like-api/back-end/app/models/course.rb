class Course < ApplicationRecord
  validates :name, presence: true

  has_many :sections, dependent: :destroy
  has_many :path_courses, dependent: :destroy
  has_many :paths, through: :path_courses
  has_many :course_tags, dependent: :destroy
  has_many :tags, through: :course_tags
end
