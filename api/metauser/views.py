from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def root(request):
    return JsonResponse({"message": "root route reached"})

def all_hashtags(request, username):
    """TODO"""
    return JsonResponse({"message": username})