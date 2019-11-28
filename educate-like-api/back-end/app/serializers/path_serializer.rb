class PathSerializer
  include FastJsonapi::ObjectSerializer
  attributes :created_at, :name
end
