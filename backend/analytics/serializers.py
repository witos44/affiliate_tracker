# analytics/serializers.py

from rest_framework import serializers
from .models import ClickEvent

class ClickEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClickEvent
        fields = '__all__'
