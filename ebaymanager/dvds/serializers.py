from rest_framework import serializers
from .models import Dvd

class DvdSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dvd
        fields = '__all__'