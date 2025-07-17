# analytics/views.py

from rest_framework import viewsets
from .models import ClickEvent
from .serializers import ClickEventSerializer

class ClickEventViewSet(viewsets.ModelViewSet):
    queryset = ClickEvent.objects.all().order_by('-timestamp')
    serializer_class = ClickEventSerializer

