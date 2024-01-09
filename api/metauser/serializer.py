from rest_framework import serializers
from .models import Data

# TODO define serializers, @ericqiu04, @danmxli.

class UserDataSerializer(serializers.Serializer):
    """
    Data serializer for manage_user request data validation
    """


class HashtagDataSerializer(serializers.Serializer):
    """
    Data serializer for image_hashtag request data validation
    """
    instagram_username = serializers.CharField(max_length=100)
    image_url = serializers.CharField(max_length=100)