# Add this at the top of your file
require 'faker'

# Create 5 users
5.times do
  User.find_or_create_by!(email: Faker::Internet.unique.email) do |user|
    user.password = 'bookify777'
    user.password_confirmation = 'bookify777'
  end
end

# # Get all users
users = User.all

# # Create 20 books
20.times do
  Book.find_or_create_by!(title: Faker::Book.unique.title) do |book|
    book.author = Faker::Book.author
    book.genre = Faker::Book.genre
    book.description = Faker::Lorem.paragraph
    book.cover_image_url = Faker::LoremFlickr.image
    book.rental_price = Faker::Commerce.price(range: 10..20)
    book.available_for_rent = [true, false].sample
    book.condition = ['New', 'Used'].sample
    book.user = users.sample
  end
end
# Create admin user if in development environment
if Rails.env.development?
  admin = User.find_or_create_by(email: 'admin@bookify.com') do |user|
    user.password = 'bookify2024'
    user.password_confirmation = 'bookify2024'
    user.role = :admin
  end

  # Update the role of the existing user to 'admin'
  # admin.update(role: :admin)
end




