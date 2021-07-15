from django.db import models


class Dvd(models.Model):
    barcode = models.DecimalField(max_digits=20, decimal_places=0, unique=True)
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)