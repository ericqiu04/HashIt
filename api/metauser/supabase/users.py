from dotenv import load_dotenv
from decouple import config
from supabase import create_client, Client
from typing import List, Dict
from gotrue.errors import AuthApiError
import logging

from metauser.serializer import UserDataSerializer


load_dotenv()
url: str = config('SUPABASE_URL')
key: str = config('SUPABASE_KEY')


class Users:

    def __init__(self) -> None:
        self.supabase: Client = create_client(url, key)
        pass

    def select_all(self) -> List:
        # testing connectivity purposes only
        response = self.supabase.table('profiles').select("*").execute()
        return response

    def signup(self) -> bool:

        # TODO check if existing user https://github.com/orgs/supabase/discussions/1282#discussioncomment-660488
        random_email: str = "samsalexdrrr@gmail.com"
        random_password: str = "test123"

        # TODO rate limiting error "HTTP/1.1 429 Too Many Requests"
        try:
            user = self.supabase.auth.sign_up(
                {"email": random_email, "password": random_password})
        except:
            return False

        print(user)
        return True

    def signin(self) -> bool:

        random_email: str = "samsalexdrrr@gmail.com"
        random_password: str = "test123"
        try:
            user = self.supabase.auth.sign_in_with_password(
                {"email": random_email, "password": random_password})

        except AuthApiError as e:
            logging.error(f"Authentication failed: {str(e)}")
            return False

        logging.info(user)
        return True

    def delete_account(self) -> bool:
        
        # TODO https://github.com/orgs/supabase/discussions/19222
        return True