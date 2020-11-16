FROM python:3

ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /app
COPY requirements.txt /app
WORKDIR /app
RUN pip install -r requirements.txt
RUN wget https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem
COPY . /app
EXPOSE 5000
CMD ["python", "app.py"]