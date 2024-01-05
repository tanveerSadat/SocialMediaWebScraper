from rest_framework import serializers
from .models import scrape

class ScrapeSerializer(serializers.ModelSerializer):
    class Meta:
        model = scrape
        fields = '__all__'