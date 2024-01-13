from rest_framework import serializers
from .models import Data
from django.core.validators import EmailValidator

# TODO define serializers, @ericqiu04, @danmxli.


class UserEmailDataSerializer(serializers.Serializer):
    email = serializers.EmailField(
        min_length=11,
        max_length=100,
        validators=[EmailValidator(message='Enter a valid email address with the "@" character.')])
    password = serializers.CharField(min_length=6)


class HashtagDataSerializer(serializers.Serializer):
    """
    Data serializer for image_hashtag request data validation
    """
    instagram_username = serializers.CharField(max_length=100)
    image_url = serializers.CharField(max_length=100)
