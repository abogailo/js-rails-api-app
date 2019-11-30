class SectionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content
  belongs_to :course
end
