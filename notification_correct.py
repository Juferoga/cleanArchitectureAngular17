import requests
import os

print("Definiendo variables")

url='https://api.telegram.org/bot7681422471:AAHNkebIs-X2gx3Guk-mBmORcHzMbrmnzcc/sendMessage'
url_deployed="http://app.juferoga.dev.s3-website-sa-east-1.amazonaws.com/"
bucket = "app.juferoga.dev"
send_gif=True

# Chats IDS :
chat_id = "-4591182947"

json_data={
  "chat_id":chat_id,
  "parse_mode": "HTML",
  "disable_web_page_preview": "true",
  "text": """
    <b>Pipeline completado 🎉🎉</b> \n\n
    Última versión desplegada en el bucket: \n"""
    +bucket+
    """ \n\nDesplegada en: \n
    <a href=\""""+url_deployed+"\">"+url_deployed+"</a>"
}

r = requests.post(url,json_data)

if (send_gif):
  json_data_s={
    "chat_id":chat_id,
    "animation": "https://c.tenor.com/8ZDLU43omvcAAAAM/kid-thumbs-up.gif"
  }

r = requests.post('https://api.telegram.org/bot5494777783:AAHK_3OOJiVPDNLfFsPCXDFm4SWakqIEFfo/sendAnimation',json_data_s)

