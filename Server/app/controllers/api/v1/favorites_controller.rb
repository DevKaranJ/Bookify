module Api
  module V1
    class FavoritesController < ApplicationController
      before_action :authenticate_user!
      before_action :set_user
      before_action :set_book, only: [:create]

      # Fetch all favorites associated with the current user
      def index
        @favorites = current_user.favorites.includes(:book)
        render json: @favorites, include: [:book]
      end

      # Fetch favorites associated with a specific user
      def user_favorites
        @user = User.find(params[:user_id])
        @favorites = @user.favorites.includes(:book)
        render json: @favorites, include: [:book]
      end

      def create
        @favorite = current_user.favorites.new(book: @book)
        if @favorite.save
          render json: @favorite, include: [:book], status: :created
        else
          render json: @favorite.errors, status: :unprocessable_entity
        end
      end

      private

      def set_user
        @user = current_user
      end

      def set_book
        @book = Book.find(params[:book_id])
      end
    end
  end
end
