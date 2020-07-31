import json
import requests

DATE = "20200727"

def get_games():
    api_url = "http://data.nba.net/10s/prod/v1/{}}/scoreboard.json".format(DATE)
    response - requests.get(api_url)
    if response.status_code == 200:
        return json.loads(response.content.decode'utf-8'))
    else:
        return 'Error'

if __name__ == '__main__':
    print('Hello World')
