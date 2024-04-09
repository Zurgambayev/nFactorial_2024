FROM python:3.11.2

WORKDIR /parser

COPY ./parser /parser

RUN pip install -r requirement.txt
