class CoursesController < ApplicationController

    def index
        courses = Course.all
        #render json: CourseSerializer.new(courses, include: [:sections]).serialized_json
        render json: CourseSerializer.new(courses)
    end
    
    def show
        course = Course.find(params[:id])
        render json: course.to_json
    end

    def create
        course = Course.new(course_params)
        course.save
        render json: CourseSerializer.new(course)
    end
    
    def destroy
        @course = Course.find(params[:id])
        @course.destroy
        render json: @course
    end
    
    private                                                                                                                                                 def course_params
        params.require(:course).permit(:title, sections_attributes: [:title, :content]) #whitelisting parameters
    end
      
end
