from django.db import models

class Product(models.Model):
    url = models.URLField()
    title = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    image = models.URLField(blank=True)
    note = models.TextField(blank=True)  # teks tambahan di bawah preview

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title or self.url
