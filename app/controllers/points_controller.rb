class PointsController < ApplicationController
  before_action :set_point, only: [:show, :update, :destroy]

  # GET points
  def index
    @trip = Trip.find(params[:trip_id])
    @points = @trip.points.all

    render json: @points
  end

  # GET /points/1
  def show
    render json: @point
  end

  # POST /points
  def create
    trip = Trip.find(params[:trip_id])
    @point = trip.points.create(point_params)

    if @point.save
      render json: @point
    else
      render json: @point.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /points/1
  def update
    if @point.update(point_params)
      render json: @point
    else
      render json: @point.errors, status: :unprocessable_entity
    end
  end

  # DELETE /points/1
  def destroy
    @point.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_point
      @point = Point.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def point_params
      params.require(:point).permit(:name, :location, :placeid, :rating)
    end
end
