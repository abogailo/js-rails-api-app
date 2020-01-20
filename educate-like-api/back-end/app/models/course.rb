class Course < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  validates :title, presence: true

  has_many :sections, :dependent => :delete_all 
  has_many :path_courses, dependent: :destroy
  has_many :paths, through: :path_courses
  has_many :course_tags, dependent: :destroy
  has_many :tags, through: :course_tags

  accepts_nested_attributes_for :sections
end
