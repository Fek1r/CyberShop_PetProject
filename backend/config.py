class Config:
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:10021711@localhost:5433/postgres'
    SQLALCHEMY_TRACK_MODIFICATIONS = False


import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "postgresql://postgres:10021711@localhost:5433/postgres")
    SQLALCHEMY_TRACK_MODIFICATIONS = False