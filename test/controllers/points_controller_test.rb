require 'test_helper'

class PointsControllerTest < ActionController::TestCase
  setup do
    @point = points(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create point" do
    assert_difference('Point.count') do
      post :create, params: { point: { location: @point.location, name: @point.name } }
    end

    assert_response 201
  end

  test "should show point" do
    get :show, params: { id: @point }
    assert_response :success
  end

  test "should update point" do
    patch :update, params: { id: @point, point: { location: @point.location, name: @point.name } }
    assert_response 200
  end

  test "should destroy point" do
    assert_difference('Point.count', -1) do
      delete :destroy, params: { id: @point }
    end

    assert_response 204
  end
end
