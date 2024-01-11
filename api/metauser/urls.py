from django.urls import path
from . import views

urlpatterns = [
    path("", views.root, name="root"),
    path("image-hashtag/", views.image_hashtag, name='image-hashtag'),
    path("signup/", views.signup, name='signup'),
    path("signin/", views.signin, name='signin'),
    path("delete-account/", views.delete_account, name='delete-account')
]
