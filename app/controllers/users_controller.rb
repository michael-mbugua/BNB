class UsersController < ApplicationController
    def index
        render json: User.all
    end
    def create
        user=User.create(user_params)
        render json: user
    end
    def show
        user=User.find(params[:id])
        if user
            render json: user
        else
            render json: {error: "User not found"}
        end
    end
    private
    def user_params
        params.permit(:id,:name,:email,:phone_number,:house_id)
    end
end
