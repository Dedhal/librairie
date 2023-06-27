from time import sleep
import requests

url = "http://localhost:3000/"
endpoint = "livres/"

datas = {
    "titre" : "test",
    "auteur" : "test",
    "prix" : 10,
    "description" : "test",
    }

datasEdit = {
    "titre" : "testEdit",
    "auteur" : "testEdit",
    "prix" : 10,
    "description" : "test",
    }

try:
    reponse = requests.delete(url + endpoint + "8")
    print(reponse)
    print(reponse.text)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.post(url + endpoint, json=datas)
    print(reponse)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.post(url + endpoint, json=datas)
    print(reponse)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.delete(url + endpoint + "8")
    print(reponse)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.delete(url + endpoint + "7")
    print(reponse)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.delete(url + endpoint + "8")
    print(reponse)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.put(url + endpoint + "8", json=datasEdit)
    print(reponse)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.post(url + endpoint, json=datas)
    print(reponse)
except:
    print("restart Node")

sleep(5)

try:
    reponse = requests.put(url + endpoint + "7", json=datasEdit)
    print(reponse)
except:
    print("restart Node")