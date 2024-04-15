from django.urls import path
from . views import *

urlpatterns = [
    path('view', view.as_view(), name='view'),
    path('dept', dept.as_view(), name='data_view'),
    path('vieww', view_me.as_view(), name='data_view'),
    path('del/<int:pk>/', delview_me.as_view(), name='view'),
] 