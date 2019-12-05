class CourseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :created_at, :title, :sections

  #def sections
   # FastJsonapi::ObjectSerializer.new(object.sections, each_serializer: SectionSerializer)
  #end
end
