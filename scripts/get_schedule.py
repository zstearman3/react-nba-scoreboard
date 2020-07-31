import json
import requests
from datetime import datetime

DATE = "20200727"

def get_games(date):
    api_url = "http://data.nba.net/10s/prod/v1/{}/scoreboard.json".format(date)
    response = requests.get(api_url)
    if response.status_code == 200:
        data = json.loads(response.content.decode('utf-8'))
        return data['games']
    else:
        return None

def transform_games(games):
    transformed_games = {}
    transformed_games['games'] = []
    for game in games:
        network = game["watch"]["broadcast"]["broadcasters"]["national"][0]["longName"] if len(game["watch"]["broadcast"]["broadcasters"]["national"]) > 0 else "None"
        object = {
            'tipTimeEastern': game["startTimeEastern"],
            'awayTeam': {
                'name': game["vTeam"]["triCode"],
                'score': game["vTeam"]["score"],
                'q1': game["vTeam"]["linescore"][0]["score"],
                'q2': game["vTeam"]["linescore"][1]["score"],
                'q3': game["vTeam"]["linescore"][2]["score"],
                'q4': game["vTeam"]["linescore"][3]["score"]
                },
            'homeTeam': {
                'name': game["hTeam"]["triCode"],
                'score': game["hTeam"]["score"],
                'q1': game["hTeam"]["linescore"][0]["score"],
                'q2': game["hTeam"]["linescore"][1]["score"],
                'q3': game["hTeam"]["linescore"][2]["score"],
                'q4': game["hTeam"]["linescore"][3]["score"]
                },
            'location': "{} - {}, {}".format(game["arena"]["name"], game["arena"]["city"], game["arena"]["stateAbbr"]),
            'tvNetwork': network
        }
        transformed_games['games'].append(object)
    with open('src/components/data.json', 'w') as outfile:
        json.dump(transformed_games, outfile)

if __name__ == '__main__':
    date_str = input("Enter date in MM/DD/YY format or leave blank for default. \n")
    while True:
        if date_str != '':
            try:
                date = datetime.strptime(date_str, '%m/%d/%y')
                formatted_date = date.strftime('%Y%m%d')
                break
            except:
                date_str = input("The date was not valid. Please input date in MM/DD/YY format or leave blank for default. \n")
        else:
            formatted_date = DATE
            break
    games = get_games(formatted_date)
    if games:
        transform_games(games)
    else:
        print('The API was not loaded properly.')
