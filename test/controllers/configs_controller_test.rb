require 'test_helper'

class ConfigsControllerTest < ActionController::TestCase
  setup do
    @config = configs(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should create config" do
    assert_difference('Config.count') do
      post :create, params: { config: { api_key: @config.api_key } }
    end

    assert_response 201
  end

  test "should show config" do
    get :show, params: { id: @config }
    assert_response :success
  end

  test "should update config" do
    patch :update, params: { id: @config, config: { api_key: @config.api_key } }
    assert_response 200
  end

  test "should destroy config" do
    assert_difference('Config.count', -1) do
      delete :destroy, params: { id: @config }
    end

    assert_response 204
  end
end
