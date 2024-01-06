from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def root(request):
    return Response()


@api_view(['POST'])
def image_hashtag(request):
    data = request.data
    return Response({
        "message": data
    })
