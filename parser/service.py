import json
import requests
from bs4 import BeautifulSoup

HEADERS ={
    "Accept":"*/*",
    "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
}
DOMEN = "http://tengrinews.kz"

def parse_website(url):
    try:
        response = requests.get(url, headers=HEADERS)

        if response.status_code == 200:
            soup = BeautifulSoup(response.text, 'html.parser')

            content_main = soup.find('div', class_="content_main")
            if content_main:
                div_tags = content_main.find_all('div', class_="content_main_item")
                
                data = []
                for item in div_tags:
                    title_element = item.find("span", class_="content_main_item_title")
                    link_element = item.find("a")
                    announce_element = item.find("span", class_="content_main_item_announce")
                    meta_element = item.find("div", class_="content_main_item_meta")
                    news_url = DOMEN + item.find("a").get("href")
                    title = title_element.text.strip() if title_element else ""

                    announce = announce_element.text.strip() if announce_element else ""
                    meta = meta_element.text.strip() if meta_element else ""
                    image_element = item.find('picture')
                    image_url = "https://tengrinews.kz" + image_element.find_all('source')[0].get('srcset') if image_element else ""

                    viewings_comments = item.find_all("span", class_="tn-text-preloader-dark")
                    viewings = viewings_comments[0].text.strip() if viewings_comments and len(viewings_comments) > 0 else ""
                    comments = viewings_comments[1].text.strip() if viewings_comments and len(viewings_comments) > 1 else ""

                    data.append({
                        "title": title,
                        "news_url":news_url, 
                        "announce": announce,
                        "meta": meta,
                        "image_url": image_url,
                        "viewings": viewings,
                        "comments": comments
                    })
                    
                with open("parsed_data.json", "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=4)
                print("Данные успешно записаны в файл parsed_data.json")
            else:
                print("Элемент content_main не найден на странице.")
        else:
            print("Ошибка при получении страницы. Код состояния:", response.status_code)
    except Exception as e:
        print("Произошла ошибка:", e)

if __name__ == "__main__":
    parse_website("https://tengrinews.kz/tag/%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D1%8B/")
