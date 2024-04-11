import json
import requests
from bs4 import BeautifulSoup

HEADERS ={
    "Accept":"*/*",
    "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
}

def parse_website_detail(url):
    try:
        response = requests.get(url, headers=HEADERS)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')

            date_time_element = soup.find('div', class_="date-time")
            headline_element = soup.find('h1', class_="head-single")
            picture_element = soup.find('picture', class_="content_main_thumb_img")
            conte_main_description = soup.find('h2', class_ = "content_main_desc")
            text1 = soup.find('div', class_ = "content_main_text") 
            text2 = soup.find_all('p')

            date_time = date_time_element.text.strip() if date_time_element else ""
            headline = headline_element.text.strip() if headline_element else ""
            image_url = picture_element.find('img').get('src') if picture_element else ""
            conte_main_description = conte_main_description.text.strip() if conte_main_description else ""
            text2_dict = {f"paragraph_{index}": paragraph.text.strip() for index, paragraph in enumerate(text2, start=1)} if text2 else {}




            data = {
                "date_time": date_time,
                "headline": headline,
                "image_url":image_url,
                "conte_main_description" : conte_main_description,
                'text2_dict':text2_dict
            }

            with open("parsed_data_detail.json", "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            print("Данные успешно записаны в файл parsed_data.json")
        else:
            print("Ошибка при получении страницы. Код состояния:", response.status_code)
    except Exception as e:
        print("Произошла ошибка:", e)

if __name__ == "__main__":
    parse_website_detail("https://tengrinews.kz/kazakhstan_news/pavodki-v-kazahstane-tri-ugolovnyih-dela-rassleduet-afm-531987/")








