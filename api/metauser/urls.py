from django.urls import path
from . import views

urlpatterns = [
    path("", views.root, name="root"),
    path("image_hashtag/", views.image_hashtag, name='image_hashtag'),
    path("manage_user/", views.manage_user, name='manage_user')
]
