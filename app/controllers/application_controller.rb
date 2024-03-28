class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include CanCan::ControllerAdditions

  before_action :set_current_ability
  before_action :configure_permitted_parameters, if: :devise_controller?

  respond_to :json

  rescue_from CanCan::AccessDenied do |_exception|
    render json: { error: 'Access denied' }, status: :forbidden
  end

  def user?
    current_user&.user?
  end

  def admin?
    current_user&.admin?
  end

  private

  def set_current_ability
    @set_current_ability ||= Ability.new(current_user)
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name email password password_confirmation role])
    devise_parameter_sanitizer.permit(:account_update, keys: %i[name role password])
  end
end
