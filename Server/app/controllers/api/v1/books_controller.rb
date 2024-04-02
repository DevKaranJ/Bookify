class Api::V1::BooksController < ApplicationController
  before_action :authenticate_user!, only: %i[create update destroy]
  before_action :set_book, only: %i[show update destroy]

  # GET /api/v1/books
  def index
    @books = Book.all

    render json: @books
  end

  # GET /api/v1/books/my_books
  def my_books
    @user = User.find(params[:user_id])
    @books = @user.books
    render json: @books
  rescue ActiveRecord::RecordNotFound
    render json: { message: 'User not found' }, status: :not_found
  end

  # GET /api/v1/books/1
  def show
    render json: @book
  end

  # POST /api/v1/books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/books/1
  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/books/1
  def destroy
    @book.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_book
    @book = Book.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def book_params
    params.require(:book).permit(:title, :author, :genre, :description, :cover_image_url, :rental_price,
                                 :available_for_rent, :condition, :user_id)
  end
end
