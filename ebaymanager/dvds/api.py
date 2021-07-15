from .models import Dvd
from .serializers import DvdSerializer

from rest_framework import viewsets, permissions

class DvdViewSet(viewsets.ModelViewSet):
    queryset = Dvd.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DvdSerializer