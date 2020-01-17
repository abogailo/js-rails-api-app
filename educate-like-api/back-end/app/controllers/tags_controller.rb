class TagsController < ApplicationController
    def index
      tags = Tag.all
    
      render json: TagSerializer.new(tags)
    end

    def create
      tag = Tag.new(tag_params)
      tag.save
      render json: TagSerializer.new(tag)
  end

  private                                                                                                                                                 def course_params
    params.require(:tag.permit(:name) #whitelisting parameters
end
end
