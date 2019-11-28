class Path < ApplicationRecord
  has_many :path_courses, dependent: :delete_all
  has_many :courses, through: :path_courses
end
