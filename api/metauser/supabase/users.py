from dotenv import load_dotenv
from decouple import config
from supabase import create_client, Client
from typing import List, Dict
from gotrue.errors import AuthApiError
import logging
import json


load_dotenv()
url: str = config('SUPABASE_URL')
key: str = config('SUPABASE_KEY')


class Users:

    def __init__(self) -> Dict:
        self.supabase: Client = create_client(url, key)
        pass

    def signup(self, email, password) -> Dict:
        try:
            user = self.supabase.auth.sign_up(
                {"email": email, "password": password})

        # TODO if existing user https://github.com/orgs/supabase/discussions/1282
        except:
            return {}

        # TODO serialize this data
        user_data = {
            'user_id': user.user.id,
            'email': user.user.email,
            'access_token': user.session.access_token,
            'refresh_token': user.session.refresh_token,
            'expires_in': user.session.expires_in,
            'expires_at': user.session.expires_at,
        }
        return user_data

    def signin(self, email, password) -> bool:
        try:
            user = self.supabase.auth.sign_in_with_password(
                {"email": email, "password": password})

        except AuthApiError as e:
            logging.error(f"Authentication failed: {str(e)}")
            return False

        logging.info(user)
        return True

    def all_users(self) -> List:
        # testing connectivity purposes only
        response = self.supabase.rpc('all_users', {}).execute()
        return response['data']

    def delete_account(self, user_uid) -> bool:

        # TODO https://github.com/orgs/supabase/discussions/250

        response = self.supabase.rpc(
            'delete_user_by_id', {'user_id': user_uid}).execute()
        print(response)
        return True
