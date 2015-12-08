require 'test_helper'

class TripsControllerTest < ActionController::TestCase
  setup do
    @trip = trips(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create trip" do
    assert_difference('Trip.count') do
      post :create, params: { trip: { location: @trip.location, name: @trip.name, point_id: @trip.point_id } }
    end

    assert_response 201
  end

  test "should show trip" do
    get :show, params: { id: @trip }
    assert_response :success
  end

  test "should update trip" do
    patch :update, params: { id: @trip, trip: { location: @trip.location, name: @trip.name, point_id: @trip.point_id } }
    assert_response 200
  end

  test "should destroy trip" do
    assert_difference('Trip.count', -1) do
      delete :destroy, params: { id: @trip }
    end

    assert_response 204
  end
end
