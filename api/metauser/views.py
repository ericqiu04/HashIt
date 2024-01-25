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
    return Response({
        "message": "metauser route reached"
    })


@api_view(['POST'])
def signup(request):
    serializer = UserEmailDataSerializer(data=request.data)

    if not serializer.is_valid():
        return Response({
            "success" : False,
            "response": "Invalid request data"
        })
    email = str(serializer.validated_data['email'])
    password = str(serializer['password'])

    signup_response = users.signup(email, password)
    return Response(signup_response)


@api_view(['POST'])
def signin(request):
    serializer = UserEmailDataSerializer(data=request.data)

    if not serializer.is_valid():
        return Response({
            "success": False,
            "response": "Invalid request data"
        })
    email = str(serializer.validated_data['email'])
    password = str(serializer['password'])

    signin_response = users.signin(email, password)
    return Response(signin_response)


@api_view(['POST'])
def delete_account(request):

    # TODO delete specified account from auth.users
    # admin level only
    user_uid = request.data['user_uid']

    users.delete_account(user_uid)
    return Response({
        "message": "TODO account deletion successful",
    })
