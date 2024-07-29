from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.hashers import make_password
from django.template.loader import render_to_string
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import ValidationError
from core.utils import send_html_email
from .models import CustomUser
from employee.models import Employee
from .serializers import UserLoginSerializer, UserLogoutSerializer, PasswordResetSerializer, PasswordResetRequestSerializer, AccessTokenSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from backend.settings import SIMPLE_JWT
import random
import string


class UserLoginAPIView(generics.GenericAPIView):
    serializer_class = UserLoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        authenticated = serializer.validated_data["authenticated"]

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)

        user_data = {
            "user" : user.email,
        }

        return Response({
            "user_data" : user_data,
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "token_expiry": SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"],
            "authenticated" : authenticated,
            "status_code" : status.HTTP_200_OK,
        }, status=status.HTTP_200_OK)


class PasswordResetRequestAPIView(generics.GenericAPIView):
    serializer_class = PasswordResetRequestSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        user = CustomUser.objects.filter(email=email).first()
        employee = Employee.objects.filter(company_mail=email).first()

        if user:
            # Generate password reset token
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            token = default_token_generator.make_token(user)
            reset_url = f"http://127.0.0.1:8000/auth/reset/{uid}/{token}/"

            # Compose email subject and message
            subject = "Password Reset Request (Test Mail)"
            # html_message = render_to_string('emails/reset_link.html', {'employee': employee, 'reset_url': reset_url})
            template_name = 'emails/reset_link.html'
            context = {'employee': employee, 'reset_url': reset_url}
            recipient_list = [employee.company_mail]


            # Send email to user
            try:
                send_html_email(subject, recipient_list=recipient_list, context=context, template_name=template_name, plain_message={})
                return Response({'message': 'Password reset link sent successfully', "status_code" : status.HTTP_200_OK}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': f"Error sending password reset email: {e}"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response({'error': 'User with this email does not exist', "status_code" : status.HTTP_400_BAD_REQUEST}, status=status.HTTP_400_BAD_REQUEST)


class UserLogoutAPIView(generics.GenericAPIView):
    serializer_class = UserLogoutSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def post (self,request):
        try:
            refresh_token =request.data.get('refresh')
            if refresh_token:
                token = RefreshToken(refresh_token)
                token.blacklist()
                return Response({'message':'Logged out Successfully','status_code':status.HTTP_205_RESET_CONTENT})
            else:
                return Response({'error':'token is ivalid','status_code':status.HTTP_404_NOT_FOUND})
            
        except Exception as e :
            return Response ({'error':str(e),'status_code':status.HTTP_500_INTERNAL_SERVER_ERROR})


class PasswordResetConfirmAPIView(generics.GenericAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = PasswordResetSerializer

    def post(self, request, uidb64, token, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True) 

        # Decode the UID
        try:
            uid = str(urlsafe_base64_decode(uidb64), 'utf-8')
            user = CustomUser.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, CustomUser.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            # Update the user's password
            user.set_password(serializer.validated_data['new_password'])
            user.save()
            return Response({'message': 'Password reset successfully', "status_code" : status.HTTP_200_OK}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid reset link', "status_code" : status.HTTP_400_BAD_REQUEST}, status=status.HTTP_400_BAD_REQUEST)
        
class AccessTokenAPIView(generics.GenericAPIView):
    serializer_class = AccessTokenSerializer
    def post(self, request):
        refresh_token = request.data.get('refresh_token')

        if refresh_token:
            try:
                refresh = RefreshToken(refresh_token)
                access_token = str(refresh.access_token)
                return Response({'access_token': access_token,
                                 "token_expiry": SIMPLE_JWT["ACCESS_TOKEN_LIFETIME"],
                                 "status_code" : status.HTTP_200_OK}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Refresh token is missing', "status_code" : status.HTTP_400_BAD_REQUEST}, status=status.HTTP_400_BAD_REQUEST)