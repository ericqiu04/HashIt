from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

# serializers for request body validation
from metauser.serializer import UserEmailDataSerializer, HashtagDataSerializer

# TODO helper classes
# from metauser.entity_recognition.image_recognizer import ImageRecognizer
from metauser.supabase.users import Users
users = Users()


@api_view(['GET', 'POST'])
def root(request):
    return Response()


@api_view(['POST'])
def signup(request):
    serializer = UserEmailDataSerializer(data=request.data)

    if not serializer.is_valid():
        return Response({
            "message": "invalid request data"
        })
    email = str(serializer.validated_data['email'])
    password = str(serializer['password'])

    if not users.signup(email, password):
        return Response({
            "message": "signup unsuccessful"
        })

    return Response({
        "message": "signup successful",
        "email": email
    })


@api_view(['POST'])
def signin(request):
    serializer = UserEmailDataSerializer(data=request.data)

    if not serializer.is_valid():
        return Response({
            "message": "invalid request data"
        })
    email = str(serializer.validated_data['email'])
    password = str(serializer['password'])

    if not users.signin(email, password):
        return Response({
            "message": "signin unsuccessful"
        })

    return Response({
        "message": "signin successful"
    })


@api_view(['POST'])
def delete_account(request):

    # TODO delete specified account from auth.users
    # admin level only
    user_uid = request.data['user_uid']

    users.delete_account(user_uid)
    return Response({
        "message": "TODO account deletion successful",
    })
