get '/' do
  erb :index
end

get '/game' do
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
  redirect to '/game'
end

get '/stats' do
  erb :stats_view
end