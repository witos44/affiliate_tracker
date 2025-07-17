from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.http import JsonResponse
from .views import register_user, get_user_info

def auth_root(request):
    return JsonResponse({
        "message": "Auth API",
        "login": "/api/auth/login/",
        "refresh": "/api/auth/refresh/"
    })

urlpatterns = [
    path('', auth_root, name='auth_root'),  # handles GET /api/auth/
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', register_user, name='register'),
    path('me/', get_user_info),  # maps to /api/auth/me/
]

