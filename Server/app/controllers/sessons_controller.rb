class SessionsController < DeviseTokenAuth::SessionsController
  def create
    super do |resource|
      response_json[:data][:role] = resource.role if resource && response_json[:data]
    end
  end
end
