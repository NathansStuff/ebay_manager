from rest_framework import routers, urlpatterns
from .api import DvdViewSet

router = routers.DefaultRouter()
router.register('dvd', DvdViewSet, 'dvds')

urlpatterns = router.urls