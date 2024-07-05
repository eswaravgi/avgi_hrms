from django.urls import path
from . views import *

urlpatterns = [
    path('asset_info/view', AssetInfoView.as_view(), name='data_view'),
    path('asset/view', AssetView.as_view(), name='data_view'),
    path('asset_info/del/<int:pk>/', AssetInfoOperation.as_view(), name='view'),
    path('asset/del/<int:pk>/', AssetOperation.as_view(), name='view'),
] 