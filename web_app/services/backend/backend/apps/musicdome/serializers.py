from .models import Track, Genre, Artist, Album, UserPreferences, Feedback
from rest_framework import serializers


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = "__all__"


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = "__all__"


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = "__all__"


class TrackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Track
        fields = "__all__"
        
class GetTopGenreSerializer(serializers.Serializer):
    genres = serializers.CharField()
    total = serializers.IntegerField()


class UserPreferencesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPreferences
        fields = "__all__"
        
class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = "__all__"
