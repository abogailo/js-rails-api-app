class Tag < ApplicationRecord
   has_many :course_tags, dependent: :delete_all
   has_many :courses, through: :course_tags
   has_many :path_tags, dependent: :delete_all
   has_many :paths, through: :path_tags
end
