from rest_framework import serializers
from .models import AffiliateLink

class AffiliateLinkSerializer(serializers.ModelSerializer):
    full_url = serializers.ReadOnlyField()

    class Meta:
        model = AffiliateLink
        fields = '__all__'
