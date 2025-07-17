# analytics/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ClickEventViewSet

router = DefaultRouter()
router.register(r'', ClickEventViewSet)  # /api/clicks/

urlpatterns = [
    path('', include(router.urls)),
]
