require 'test_helper'

class Api::V1::RentalRequestsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_v1_rental_request = api_v1_rental_requests(:one)
  end

  test 'should get index' do
    get api_v1_rental_requests_url, as: :json
    assert_response :success
  end

  test 'should create api_v1_rental_request' do
    assert_difference('Api::V1::RentalRequest.count') do
      post api_v1_rental_requests_url,
           params: {
             api_v1_rental_request: {
               book_id: @api_v1_rental_request.book_id,
               end_date: @api_v1_rental_request.end_date,
               start_date: @api_v1_rental_request.start_date,
               status: @api_v1_rental_request.status,
               user_id: @api_v1_rental_request.user_id
             }
           },
           as: :json
    end

    assert_response :created
  end

  test 'should show api_v1_rental_request' do
    get api_v1_rental_request_url(@api_v1_rental_request), as: :json
    assert_response :success
  end

  test 'should update api_v1_rental_request' do
    patch api_v1_rental_request_url(@api_v1_rental_request),
          params: {
            api_v1_rental_request: {
              book_id: @api_v1_rental_request.book_id,
              end_date: @api_v1_rental_request.end_date,
              start_date: @api_v1_rental_request.start_date,
              status: @api_v1_rental_request.status,
              user_id: @api_v1_rental_request.user_id
            }
          },
          as: :json
    assert_response :success
  end

  test 'should destroy api_v1_rental_request' do
    assert_difference('Api::V1::RentalRequest.count', -1) do
      delete api_v1_rental_request_url(@api_v1_rental_request), as: :json
    end

    assert_response :no_content
  end
end
