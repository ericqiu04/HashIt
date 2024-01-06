from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def root(request):
    return Response()

class ImageHashtagView(APIView):
    def post(self, request, *args, **kwargs):
        data = request.data

        return Response({
            "message": "hi"
        })