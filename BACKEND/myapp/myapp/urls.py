from django.urls import path
from myapp1 import views

urlpatterns = [
    path('api/products/', views.product_list),
    path('api/products/<int:pk>/', views.product_detail),
]

from django.conf import settings
from django.conf.urls.static import static


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)