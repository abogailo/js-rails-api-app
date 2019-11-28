class SectionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :content
end
