from django.urls import path
from . import views

urlpatterns = [
    path("", views.root, name="root"),
    path("image_hashtag/", views.image_hashtag, name='image_hashtag')
]
