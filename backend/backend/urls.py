from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from links.views import AffiliateLinkViewSet
from analytics.views import ClickEventViewSet

router = DefaultRouter()
router.register(r'links', AffiliateLinkViewSet)
router.register(r'clicks', ClickEventViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),                  # <-- this adds /api/links, /api/products, /api/clicks
    path('api/auth/', include('accounts.urls')),         # <-- this keeps your auth route
    path('api/products/', include('products.urls')),
]

