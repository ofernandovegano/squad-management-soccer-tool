require 'uri'
require 'net/http'
require 'openssl'
require'json'

class PagesController < ApplicationController
  def home
    @teams = Team.all
  end
  
  def reload_teams
    save_to_DB
  end

  def reload_avg_age_players
    avg_age_players
  end

  def football_api   
    url = URI("https://v3.football.api-sports.io/teams?league=71&season=2020")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'v3.football.api-sports.io'
    request["x-rapidapi-key"] = ENV["REACT_APP_FOOTBALL_KEY"]
    
    response = http.request(request)
    JSON.parse response.read_body 
  end

  def save_to_DB
    teams = football_api["response"]
    teams.each do |team|
      Team.create(name: team["team"]["name"], team_id: team["team"]["id"])
    end
  end

  def players_age_api(team)
    url = URI("https://v3.football.api-sports.io/players?season=2020&team=#{team['team_id'].to_s}")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    
    request = Net::HTTP::Get.new(url)
    request["x-rapidapi-host"] = 'v3.football.api-sports.io'
    request["x-rapidapi-key"] = ENV["REACT_APP_FOOTBALL_KEY"]
    
    response = http.request(request)
    JSON.parse response.read_body 
  end

  def avg_age_players
    teams = Team.all
    teams.each do |team|
      players = players_age_api(team)['response']
      ages = []
      players.each do |player|
        ages << player['player']['age']
      end
      ages.reject! {|n| n == nil}
      avg_age = ages.sum.to_f / ages.size
      update_team = Team.find(team['id'])
      update_team.update(avg_age_players: avg_age)
    end
  end
end
