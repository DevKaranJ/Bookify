class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:create]
  before_action :set_user, only: %i[show update destroy]

  # GET /users
  def index
    @users = User.all
    render json: @users
  end

  # GET /users/:id
  def show
    render json: @user
  end

  # PUT /users/:id
  def update
    puts "Params received: #{params.inspect}"
    if @user.update(user_params)
      render json: { message: 'User updated successfully', user: @user }
    else
      render json: { message: 'Error updating user', errors: @user.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /users/:id
  def destroy
    @user.destroy
    render json: { message: 'User deleted successfully' }
  end

  private

  def set_user
    @user = User.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'User not found' }, status: :not_found
  end

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :role)
  end
end
