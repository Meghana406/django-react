from rest_framework import serializers 
from django.contrib.auth import get_user_model 

class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = '__all__'
    
    # Encrypts the password 
    def create(self, validated_data):
        user = get_user_model().objects.create(
            email = validated_data['email'],
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()
        return user 

class UserRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = (
            'id',
            'email',
            'first_name',
            'last_name'
        )