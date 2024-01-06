from rest_framework import serializers
from .models import Data

# TODO define serializers, @ericqiu04, @danmxli.


class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ('first_name', 'instagram_username')


class HashtagDataSerializer(serializers.Serializer):
    instagram_username = serializers.CharField(max_length=100)
    image_url = serializers.CharField(max_length=100)
