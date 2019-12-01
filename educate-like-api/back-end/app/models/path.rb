class Path < ApplicationRecord
  has_many :path_courses, dependent: :delete_all
  has_many :courses, through: :path_courses
  has_many :path_tags, dependent: :delete_all
  has_many :tags, through: :path_tags
end
