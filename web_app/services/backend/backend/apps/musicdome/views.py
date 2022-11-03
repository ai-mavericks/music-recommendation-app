from rest_framework.viewsets import ReadOnlyModelViewSet
from .serializers import (
    TrackSerializer,
    GenreSerializer,
    ArtistSerializer,
    AlbumSerializer,
)
from .models import Track, Album, Artist, Genre


class TrackViewSet(ReadOnlyModelViewSet):

    serializer_class = TrackSerializer
    queryset = Track.objects.all()


class GenreViewSet(ReadOnlyModelViewSet):

    serializer_class = GenreSerializer
    queryset = Genre.objects.all()


class ArtistViewSet(ReadOnlyModelViewSet):

    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()


class AlbumViewSet(ReadOnlyModelViewSet):

    serializer_class = AlbumSerializer
    queryset = Album.objects.all()
