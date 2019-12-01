class CoursesController < ApplicationController

    def index
        courses = Course.all
        render json: CourseSerializer.new(courses, include: [:sections]).serialized_json
    end
    
    def show
        course = Course.find(params[:id])
        render json: course.to_json
    end

    def create
        course = Course.new(course_params)
        paths = params[:paths].map { |path| Paths.find_by(title: path) }
        tags = params[:tags].map { |tag| Tags.find_or_create_by(name: tag) }
        course.paths << paths
        course.tags << tags
        course.save
        render json: CourseSerializer.new(course)
    end
    
    def new
        @course = Course.find(params[:id])
    end
    
    
    def destroy
        @course = Course.find(params[:id])
        @course.delete
        render json: @course
    end
    
    private
    
                                                                                                                                                             def course_params
        params.require(:course).permit(:title, sections_attributes: [:title, :text])
    end
      
end
