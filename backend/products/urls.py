# products/urls.py

from django.urls import path
from .views import LinkPreviewAPIView

urlpatterns = [
    path('api/link-preview/', LinkPreviewAPIView.as_view(), name='link-preview'),
]