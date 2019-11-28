class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :created_at, :name
end
