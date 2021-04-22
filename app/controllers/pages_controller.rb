require 'uri'
require 'net/http'
require 'openssl'
require'json'

class PagesController < ApplicationController
  def home
    
  end

  def football_api   
    url = URI("https://v3.football.api-sports.io/teams?league=71&season=2020")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'v3.football.api-sports.io'
    request["x-rapidapi-key"] = "#{ENV["REACT_APP_FOOTBALL_KEY"]}"
    
    response = http.request(request)
    JSON.parse response.read_body 
  end

  def save_to_DB
    @teams = football_api.response.each do |team|
      Team.create(name: team["name"], team_id: team["id"])
    end
  end
end
