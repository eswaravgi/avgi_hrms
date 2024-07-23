from django.urls import path
from .views import UserLoginAPIView, UserLogoutAPIView, PasswordResetRequestAPIView, PasswordResetConfirmAPIView, AccessTokenAPIView

urlpatterns = [
    path('login/', UserLoginAPIView.as_view(), name='user-login'),
    path('logout/', UserLogoutAPIView.as_view(), name='user-logout'),
    path('password/reset/', PasswordResetRequestAPIView.as_view(), name='password-reset-request'),
    path('reset/<uidb64>/<token>/', PasswordResetConfirmAPIView.as_view(), name='password_reset_confirm'),
    path('token/access/', AccessTokenAPIView.as_view(), name='access_token'),
]