from django.contrib import admin
from .models import Image, Project

# Register your models here.
@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'created_at', 'image']

@admin.register(Project)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['id','name', 'user', 'created_at', 'image']