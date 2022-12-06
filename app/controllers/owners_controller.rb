class OwnersController < ApplicationController
    def index
        render json: Owner.all, status: :ok
    end
    def show
        owner=Owner.find_by(id: session[:owner_id])
        if owner
            render json: owner
        else
            render json: {error: "not authorized"},status: :unauthorized
        end
    end
end
