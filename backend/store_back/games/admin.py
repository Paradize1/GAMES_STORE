from django.contrib import admin
from .models import Game


@admin.register(Game)
class GameAdmin(admin.ModelAdmin):
    list_display = ('title', 'publisher', 'price', 'created_at', 'updated_at')
    search_fields = ('title', 'publisher')
    list_filter = ('publisher', 'created_at')
    ordering = ('-created_at',)
    fields = ('title', 'description', 'image', 'publisher', 'price')
