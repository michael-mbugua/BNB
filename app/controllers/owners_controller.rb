class OwnersController < ApplicationController
    def index
        render json: Owner.all, status: :ok
    end
end
