class AdminsController < ApplicationController
    def create
        owner=Owner.find_by(name: params[:name])
        session[:owner_id]=owner.id
        render json: owner
    end
    def destroy
        session.delete :owner_id
        head :no_content
    end
end
