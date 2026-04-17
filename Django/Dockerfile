FROM python:3.10
WORKDIR /app
COPY . .

RUN pip install --no-cache-dir django psycopg2-binary redis django-cors-headers
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]