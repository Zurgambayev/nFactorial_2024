from fastapi import APIRouter
import aiofiles
import json
import datetime

from service import parse_website

router = APIRouter()

file_path = 'parsed_data.json'
date1 = datetime.datetime.now()

@router.get("/pages")
async def get_pages():
    parse_website("https://tengrinews.kz/tag/%D0%B0%D0%BB%D0%BC%D0%B0%D1%82%D1%8B/")
    async with aiofiles.open(file_path, mode='r', encoding='utf-8') as json_file:
        data = await json_file.read()
    articles = json.loads(data)
    return articles   

