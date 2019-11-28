class Tag < ApplicationRecord
   has_many :course_tags, dependent: :delete_all
   has_many :courses, through: :course_tags
end
