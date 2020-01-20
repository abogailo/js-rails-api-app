class Course < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  validates :title, presence: true

  has_many :sections, :dependent => :delete_all 
  has_many :course_tags, :dependent => :delete_all 
  has_many :tags, through: :course_tags

  accepts_nested_attributes_for :sections
end
