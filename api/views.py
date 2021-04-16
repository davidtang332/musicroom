from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room

# Create your views here.
class RoomView(generics.ListAPIView):
    # return query set of all different rooms
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

class CreateRoomView(APIView):
    def post(self, request, format=None):
        pass
