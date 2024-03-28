class Book < ApplicationRecord
  belongs_to :user
  has_many :rental_requests
  has_many :favorites
end
