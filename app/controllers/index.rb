get '/' do
  erb :index
end

get '/game/:game_id' do
  @current_game = Game.find_by_id(params[:game_id])
  @player1 = Player.find_by_id(session[:p1_id])
  @player2 = Player.find_by_id(session[:p2_id])
  erb :game_view
end

post '/creategame' do
  new_game = Game.create(complete: false)
  player1 = Player.find_or_create_by_name(params[:player1])
  player1.games << new_game
  player2 = Player.find_or_create_by_name(params[:player2])
  player2.games << new_game
  session[:p1_id] = player1.id
  session[:p2_id] = player2.id
  @game_id = new_game.id
  redirect to "/game/#{@game_id}"
end

get '/stats/:id' do
  erb :stats_view

end

post '/stats' do
# content_type :json
@id = params[:id]
game = Game.find(params[:id])
game[:duration] = params[:time]
game[:complete] = true
game.save
end