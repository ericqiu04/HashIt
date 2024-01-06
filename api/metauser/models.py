from django.db import models

# TODO define models, @ericqiu04, @danmxli.


class Data(models.Model):
    first_name = models.CharField(max_length=100)
    instagram_username = models.CharField(max_length=100)
