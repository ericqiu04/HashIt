from django.db import models

# Create your models here.

class Data(models.Model):
    first_name = models.CharField(max_length=100)
    instagram_username = models.CharField(max_length=100)

