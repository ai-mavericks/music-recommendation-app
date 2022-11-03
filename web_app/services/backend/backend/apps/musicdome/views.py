from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from .serializers import (
    TrackSerializer,
    GenreSerializer,
    ArtistSerializer,
    AlbumSerializer,
)
from rest_framework.permissions import IsAuthenticated
from .models import Track, Album, Artist, Genre
from .pagination import TrackSetPagination


class TrackViewSet(ModelViewSet):

    serializer_class = TrackSerializer
    queryset = Track.objects.all().order_by("_id")
    pagination_class = TrackSetPagination


class GenreViewSet(ReadOnlyModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = GenreSerializer
    queryset = Genre.objects.all().order_by("_id")


class ArtistViewSet(ReadOnlyModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all().order_by("_id")


class AlbumViewSet(ReadOnlyModelViewSet):
    permission_classes = (IsAuthenticated,)
    serializer_class = AlbumSerializer
    queryset = Album.objects.all().order_by("_id")
