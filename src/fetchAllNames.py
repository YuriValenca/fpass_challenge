import requests
import json
import time
import hashlib


def get_hash(time_stamp, private_key, api_key):
    hash_string = f"{time_stamp}{private_key}{api_key}"
    return hashlib.md5(hash_string.encode("utf-8")).hexdigest()


def url_generator(offset):
    base_url = "https://gateway.marvel.com/v1/public/characters"
    time_stamp = str(int(time.time()))
    api_key = "25baa0dabcd1b7db3228ce639db3eba9"
    private_key = "6cd3701adcdfab4a2d6fec7518a8c4a8d44ff68d"
    hash_value = get_hash(time_stamp, private_key, api_key)

    url = f"{base_url}?ts={time_stamp}&apikey={api_key}&hash={hash_value}&limit=100&offset={offset}"
    return url


def fetch_all_heroes():
    all_heroes = []

    offset = 0
    url = url_generator(offset)

    while True:
        response = requests.get(url)
        data = response.json()

        characters = data["data"]["results"]
        names = [character["name"] for character in characters]
        all_heroes.extend(names)

        if len(characters) < 100:
            break

        offset += 100
        url = url_generator(offset)
        time.sleep(1)  # Add a delay between requests to avoid rate limiting

    return all_heroes


heroes = fetch_all_heroes()

# Save the heroes list to a JSON file
with open("marvel_heroes.json", "w") as file:
    json.dump(heroes, file)
