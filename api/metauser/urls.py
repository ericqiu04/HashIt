from django.urls import path
from . import views

urlpatterns = [
    path("", views.root, name="root"),
    path("all_hashtags/<str:username>", views.all_hashtags, name="all_hashtags")
]