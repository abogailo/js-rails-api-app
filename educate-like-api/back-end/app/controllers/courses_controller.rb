class CoursesController < ApplicationController

        def index
          courses = Course.all
          render json: courses
        end
      
        def show
          @course= Course.find(params[:id])
          render json: @course
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
          params.require(:course).permit(:name)
        end
      
end
