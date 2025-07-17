from django.db import models
from products.models import Product

class AffiliateLink(models.Model):
    name = models.CharField(max_length=255)
    original_url = models.URLField()
    short_code = models.CharField(max_length=50, unique=True)
    utm_source = models.CharField(max_length=100, blank=True)
    utm_medium = models.CharField(max_length=100, blank=True)
    utm_campaign = models.CharField(max_length=100, blank=True)
    product = models.ForeignKey(Product, null=True, blank=True, on_delete=models.SET_NULL)
    created_at = models.DateTimeField(auto_now_add=True)

    def full_url(self):
        params = []
        if self.utm_source: params.append(f"utm_source={self.utm_source}")
        if self.utm_medium: params.append(f"utm_medium={self.utm_medium}")
        if self.utm_campaign: params.append(f"utm_campaign={self.utm_campaign}")
        return self.original_url + ("?" + "&".join(params) if params else "")

