from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

# serializers for request body validation
from metauser.serializer import HashtagDataSerializer

# TODO helper classes
from metauser.entity_recognition.image_recognizer import ImageRecognizer
from metauser.supabase.users import Users
users = Users()


@api_view(['GET', 'POST'])
def root(request):
    return Response()


@api_view(['POST'])
def image_hashtag(request):
    # serializer = HashtagDataSerializer(data=request.data)

    # if not serializer.is_valid():
    #     return Response({
    #         "message": "invalid request data"
    #     })

    # instagram_username = serializer.validated_data['instagram_username']
    # image_url = serializer.validated_data['image_url']

    # TODO
    image_recognizer = ImageRecognizer()

    return Response({
        "message": "successfully called",
        "hashtags": ""
    })


@api_view(['POST'])
def signup(request):

    if not users.signup():
        return Response({
            "message": "signup unsuccessful"
        })

    return Response({
        "message": "signup successful"
    })


@api_view(['POST'])
def signin(request):
    """
    sign in with password, oauth, otp
    # TODO return access token
    """

    if not users.signin():
        return Response({
            "message": "signin unsuccessful"
        })

    return Response({
        "message": "signin successful"
    })


@api_view(['POST'])
def delete_account(request):
    """"
    delete this user account
    """

    if not users.delete_account():
        return Response({
            "message": "account deletion unsuccessful"
        })

    return Response({
        "message": "account deletion successful"
    })
