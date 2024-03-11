from django.urls import path
from . views import *

urlpatterns = [
    # path('', login_view.as_view(), name='login_info_view'),
    path('login', login_CreateView.as_view(), name='login_info_view'),
    path('login/<int:pk>/', login_detailsView.as_view(), name='login_details_view'),
]