class PathsController < ApplicationController
    def index
        @paths = Path.all
        render json: @paths
      end
    
      def show
        @path= Path.find(params[:id])
        render json: @path
      end
    
      def new
        @path = Path.find(params[:id])
      end
    
      def create
        path = Path.create(name: params[:name] )
        render json: path
      end
    
      def destroy
        @path = Path.find(params[:id])
        @path.delete
        render json: @path
      end
    
      private
    
      def path_params
        params.require(:path).permit(:name)
      end
    
end
