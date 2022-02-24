import os
from dotenv import load_dotenv
load_dotenv()

API_KEY = os.getenv("API_KEY")
ip_address = os.getenv("ip_address")
DEBUG = os.getenv("DEBUG")
PORT = os.getenv("PORT")
