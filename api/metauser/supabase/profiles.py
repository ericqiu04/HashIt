from dotenv import load_dotenv
from decouple import config
from supabase import create_client, Client
from typing import List, Dict

load_dotenv()
url: str = config('SUPABASE_URL')
key: str = config('SUPABASE_KEY')


class Profiles:

    def __init__(self) -> None:
        self.supabase: Client = create_client(url, key)
        pass

    def select_all(self) -> List:
        # testing connectivity purposes only
        response = self.supabase.table('profiles').select("*").execute()
        return response