from rest_framework import routers, urlpatterns
from .api import DvdViewSet

router = routers.DefaultRouter()
router.register('api/dvds', DvdViewSet, 'dvds')

urlpatterns = router.urls
