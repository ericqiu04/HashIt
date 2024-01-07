from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

# serializers for request body validation
from metauser.serializer import HashtagDataSerializer

# helper classes
from metauser.entity_recognition.image_recognizer import ImageRecognizer

@api_view(['GET', 'POST'])
def root(request):
    return Response()


@api_view(['POST'])
def image_hashtag(request):
    serializer = HashtagDataSerializer(data=request.data)

    if not serializer.is_valid():
        return Response({
            "message": "invalid request data"
        })

    instagram_username = serializer.validated_data['instagram_username']
    image_url = serializer.validated_data['image_url']

    image_recognizer = ImageRecognizer()
    

    return Response({
        "message": "successfully called",
        "hashtags": ""
    })
