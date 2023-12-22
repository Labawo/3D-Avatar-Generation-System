from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import pre_delete
from django.dispatch import receiver
import os

class Image(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)

    # Signal receiver to delete associated image file before Image instance deletion
    @receiver(pre_delete, sender='api.Image')
    def delete_image_file(sender, instance, **kwargs):
        # Check if the instance has an associated image and delete it
        if instance.image:
            if os.path.isfile(instance.image.path):
                os.remove(instance.image.path)

class Project(models.Model):
    name = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/')
    created_at = models.DateTimeField(auto_now_add=True)

    # Signal receiver to delete associated image file before Project instance deletion
    @receiver(pre_delete, sender='api.Project')
    def delete_project_image_file(sender, instance, **kwargs):
        # Check if the instance has an associated image and delete it
        if instance.image:
            if os.path.isfile(instance.image.path):
                os.remove(instance.image.path)