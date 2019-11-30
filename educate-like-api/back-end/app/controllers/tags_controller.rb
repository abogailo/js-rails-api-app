class TagsController < ApplicationController
    def index
      tags = Tag.all
    
      render json: TagSerializer.new(tags)
    end
end
