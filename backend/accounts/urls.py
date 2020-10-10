from django.conf.urls import url 
from . import views 
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token
urlpatterns = [
    url(r'^create-user/', views.UserCreateView.as_view(), name="create-user"),
    url(r'^retrieve-user/', views.UserRetrieveView.as_view()),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-refresh/', refresh_jwt_token),
    url(r'^api-token-verify/', verify_jwt_token),
]