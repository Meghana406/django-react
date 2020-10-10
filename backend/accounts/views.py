from django.shortcuts import render, get_object_or_404
from django.contrib.auth import get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics 
from rest_framework.permissions import AllowAny, IsAuthenticated
from . import serializers

# Create your views here.
class UserCreateView(generics.CreateAPIView):
    permission_classes = [AllowAny,]
    queryset = get_user_model().objects.all()
    serializer_class = serializers.UserCreateSerializer

class UserRetrieveView(APIView):
    permission_classes = [IsAuthenticated,]
    def get(self, request, format=None):
        user = get_user_model().objects.get(email=request.user.email)
        serializer = serializers.UserRetrieveSerializer(user, many=False)
        return Response(serializer.data)