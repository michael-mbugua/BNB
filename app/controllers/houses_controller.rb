class HousesController < ApplicationController
    def index
        render json: House.all, status: :ok
    end
    def show
        house=House.find_by(house_type: params[:house_type])
        render json: house, status: :found
    end
    def create
        house=House.create(house_params)
        render json: house, status: :created
    end
    def destroy
        house=House.find(params[:id])
        house.destroy()
        head :no_content
    end
    def update
        house=House.find(params[:id])
        if house
            house.update(house_params)
            render json: house
        else
            render json: {error: "house not found"}
            
        end
    end
    private
    def house_params
        params.permit(:house_type,:image,:beds,:price,:location,:description,:ratings,:capacity,:owner_id)
    end
end
