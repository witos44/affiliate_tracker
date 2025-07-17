from django.db import models
from links.models import AffiliateLink

class ClickEvent(models.Model):
    link = models.ForeignKey(AffiliateLink, on_delete=models.CASCADE)
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField()
    referrer = models.URLField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

