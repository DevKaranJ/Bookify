class Api::V1::RentalRequestsController < ApplicationController
  before_action :set_rental_request, only: %i[show update destroy]
  before_action :authenticate_user!

  # GET /api/v1/rental_requests
  def index
    @rental_requests = RentalRequest.all

    render json: @rental_requests
  end

  # GET /api/v1/rental_requests/1
  def show
    render json: @rental_request
  end

  # POST /api/v1/rental_requests
  def create
    @rental_request = RentalRequest.new(rental_request_params)

    if @rental_request.save
      render json: @rental_request, status: :created, location: @rental_request
    else
      render json: @rental_request.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/rental_requests/1
  def update
    if @rental_request.update(rental_request_params)
      render json: @rental_request
    else
      render json: @rental_request.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/rental_requests/1
  def destroy
    @rental_request.destroy!
    render json: { message: 'Rental request deleted successfully' }
  rescue StandardError => e
    render json: { error: e.message }, status: :unprocessable_entity
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_rental_request
    @rental_request = RentalRequest.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def rental_request_params
    params.require(:rental_request).permit(:user_id, :book_id, :start_date, :end_date, :status)
  end
end
