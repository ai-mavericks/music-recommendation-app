from django.urls import path, include
from .views import TrackViewSet, GenreViewSet, ArtistViewSet, AlbumViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"track", TrackViewSet, basename="Track")
router.register(r"genre", GenreViewSet, basename="Genre")
router.register(r"artist", ArtistViewSet, basename="Artist")
router.register(r"album", AlbumViewSet, basename="Album")

urlpatterns = [
    path(r"", include(router.urls)),
]
