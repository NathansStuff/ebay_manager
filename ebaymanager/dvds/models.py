from django.db import models
from timestampmixin.models import TimeStampMixin

class Dvd(TimeStampMixin):
    barcode = models.DecimalField(max_digits=20, decimal_places=0, unique=True)
    title = models.CharField(max_length=80)
    cexSell = models.DecimalField(max_digits=5, decimal_places=2, blank=True)
    cexBuy = models.DecimalField(max_digits=5, decimal_places=2, blank=True)
    cexTrade = models.DecimalField(max_digits=5, decimal_places=2, blank=True)
    imageUrl = models.CharField(max_length=200, blank=True)
