from rest_framework.viewsets import ReadOnlyModelViewSet, ModelViewSet
from .serializers import (
    TrackSerializer,
    GenreSerializer,
    ArtistSerializer,
    AlbumSerializer,
    UserPreferencesSerializer,
    FeedbackSerializer,
    GetTopGenreSerializer
)
from rest_framework.permissions import IsAuthenticated
from .models import Track, Album, Artist, Genre, UserPreferences, Feedback
from .pagination import TrackSetPagination
from .permissions import IsCreator
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http import JsonResponse
from django.db.models import Count


class TrackViewSet(ModelViewSet):

    serializer_class = TrackSerializer
    queryset = Track.objects.all().order_by("_id")
    pagination_class = TrackSetPagination
    
    @action(detail=False, methods=['GET'], name='Get Top 5 Genres')
    def genre_count(self, request, *args, **kwargs):
        queryset = list(Track.objects.all().values('genres').annotate(total=Count('genres')).order_by('-total')[0:5])
        return JsonResponse(queryset, safe=False)
    
    @action(detail=False, methods=['GET'], name='Get Top 20 Artists')
    def artist_count(self, request, *args, **kwargs):
        queryset = list(Track.objects.all().values('artists').annotate(total=Count('artists')).order_by('-total')[0:20])
        return JsonResponse(queryset, safe=False)


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


class UserPreferencesViewSet(ModelViewSet):
    queryset = UserPreferences.objects.all()
    pagination_class = None
    permission_classes = (IsAuthenticated, IsCreator)
    serializer_class = UserPreferencesSerializer
    
    
class FeedbackViewSet(ModelViewSet):
    
    serializer_class = FeedbackSerializer
    queryset = Feedback.objects.all()
    pagination_class = None
    permission_classes = (IsAuthenticated, IsCreator)
    
    @action(detail=False, methods=['GET'], name='Get Users Liked Songs')
    def liked_songs(self, request, *args, **kwargs):
        queryset = Feedback.objects.filter(user = request.user.id)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
