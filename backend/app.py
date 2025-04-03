from flask import Flask
from flask_cors import CORS
from database import db
from config import Config
from controllers.order_controller import order_bp

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
db.init_app(app)

# Регистрация blueprint
app.register_blueprint(order_bp)

# Создание таблиц
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=5003)
