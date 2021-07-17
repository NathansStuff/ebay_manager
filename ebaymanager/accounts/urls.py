from django.urls import path, include
from knox import views as knox_views
from .api import RegisterAPI, LoginAPI

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/register', RegisterAPI.as_view()),
]
