from django.urls import path
from .views import (
    RegisterView,
    ChangePasswordView,
    UpdateProfileView,
    LogoutView,
    GetProfileView,
    TokenObtainPairView,
)
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path("login/", TokenObtainPairView.as_view(), name="auth_login"),
    path("login/refresh/", TokenRefreshView.as_view(), name="auth_refresh"),
    path("register/", RegisterView.as_view(), name="auth_register"),
    path(
        "change_password/<int:pk>/",
        ChangePasswordView.as_view(),
        name="auth_changepassword",
    ),
    path(
        "update_profile/<int:pk>/",
        UpdateProfileView.as_view(),
        name="auth_updateprofile",
    ),
    path(
        "get_profile/<int:pk>/",
        GetProfileView.as_view(),
        name="auth_getprofile",
    ),
    path("logout/", LogoutView.as_view(), name="auth_logout"),
]
