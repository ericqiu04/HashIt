from django.urls import path
from . import views

urlpatterns = [
    path("", views.root, name="root"),
    path("image_hashtags/", views.ImageHashtagView.as_view(), name="image_hashtag")
]