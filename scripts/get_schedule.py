import json
import requests

DATE = "20200727"

def get_games():
    api_url = "http://data.nba.net/10s/prod/v1/{}/scoreboard.json".format(DATE)
    response = requests.get(api_url)
    if response.status_code == 200:
        data = json.loads(response.content.decode('utf-8'))
        return data['games']
    else:
        return None

def transform_games(games):
    for game in games:
        print(game['seasonYear'])

if __name__ == '__main__':
    games = get_games()
    if games:
        transform_games(games)
    else:
        print('The API was not loaded properly.')
