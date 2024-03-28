class Ability
  include CanCan::Ability

  def initialize(user)
    # No guest access
    return unless user.present?

    # Define abilities based on user roles or permissions
    if user.admin?
      can :manage, :all
    else
      can %i[read create update destroy], Favorite
      can %i[read create update destroy], RentalRequest
      can :read, Book
      cannot %i[create update destroy my_book], Book
      cannot %i[read create update destroy], User
    end
  end
end
