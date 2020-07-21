require 'yaml'
require 'tilt/erubis'
require "sinatra"
require "sinatra/reloader"

helpers do
  def count_interests(users)
    count = 0
    users.values.each do |details|
      count += details[:interests].count
    end
    count
  end
end

before do
  @users = YAML.load_file("users.yaml")
end

get '/' do
  redirect '/users'
end

get '/users' do
  erb :users
end

get "/:user_name" do
  @user_name = params[:user_name].to_sym
  @email = @users[@user_name][:email]
  @interests = @users[@user_name][:interests]

  erb :user
end