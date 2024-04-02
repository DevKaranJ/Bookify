require 'test_helper'

class Api::V1::BooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @book = books(:one)
  end

  test 'should get index' do
    get api_v1_books_url, as: :json
    assert_response :success
  end

  test 'should create book' do
    assert_difference('Book.count') do
      post api_v1_books_url,
           params: {
             book: {
               author: @book.author,
               available_for_rent: @book.available_for_rent,
               condition: @book.condition,
               cover_image_url: @book.cover_image_url,
               description: @book.description,
               genre: @book.genre,
               rental_price: @book.rental_price,
               title: @book.title,
               user_id: @book.user_id
             }
           },
           as: :json
    end

    assert_response :created
  end

  test 'should show api_v1_book' do
    get api_v1_book_url(@book), as: :json
    assert_response :success
  end

  test 'should update api_v1_book' do
    patch api_v1_book_url(@book),
          params: {
            book: {
              author: @book.author,
              available_for_rent: @book.available_for_rent,
              condition: @book.condition,
              cover_image_url: @book.cover_image_url,
              description: @book.description,
              genre: @book.genre,
              rental_price: @book.rental_price,
              title: @book.title,
              user_id: @book.user_id
            }
          },
          as: :json
    assert_response :success
  end

  test 'should destroy api_v1_book' do
    assert_difference('Book.count', -1) do
      delete api_v1_book_url(@book), as: :json
    end

    assert_response :no_content
  end
end
