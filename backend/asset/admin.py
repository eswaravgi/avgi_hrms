from django.contrib import admin
from .models import AssetInfo, Asset
# Register your models here.

admin.site.register(Asset)
admin.site.register(AssetInfo)