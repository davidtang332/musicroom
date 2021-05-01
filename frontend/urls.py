from django.urls import path
from .views import index
from .views import test1


urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index),
    path('room/<str:roomCode>', index),
    path('info', index),
    path('room/test1/', test1)
]