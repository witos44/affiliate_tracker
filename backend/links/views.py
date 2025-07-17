from rest_framework import viewsets
from .models import AffiliateLink
from .serializers import AffiliateLinkSerializer

class AffiliateLinkViewSet(viewsets.ModelViewSet):
    queryset = AffiliateLink.objects.all().order_by('-created_at')
    serializer_class = AffiliateLinkSerializer

