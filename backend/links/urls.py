# links/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AffiliateLinkViewSet

router = DefaultRouter()
router.register(r'', AffiliateLinkViewSet)  # /api/links/

urlpatterns = [
    path('', include(router.urls)),
]
