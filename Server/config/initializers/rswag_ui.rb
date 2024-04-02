# config/initializers/rswag_ui.rb

Rswag::Ui.configure do |c|
  c.openapi_endpoint 'v1', '/api-docs/v1/swagger.yaml'
end