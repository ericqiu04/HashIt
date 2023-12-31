from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def root(request):
    return JsonResponse({"message": "root route reached"})
