class UsersController < ApplicationController
    def index
        render json: User.all
    end
    def create
        user=User.create(user_params)
        render json: user, status: :ok
    end
    def show
        user=User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "not authorized"},status: :unauthorized
        end
    end
    private
    def user_params
        params.permit(:id,:name,:email,:phoneNumber,:house_id)
    end
end
