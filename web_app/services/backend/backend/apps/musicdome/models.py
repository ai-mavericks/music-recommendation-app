from django.db import models


class Album(models.Model):
    _id = models.CharField(max_length=50, primary_key=True)
    title = models.CharField(max_length=500)
    release_year = models.CharField(max_length=10)
    cover_image = models.URLField()

    def __str__(self):
        return self.title


class Genre(models.Model):
    _id = models.CharField(max_length=50, primary_key=True)
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Artist(models.Model):
    _id = models.CharField(max_length=50, primary_key=True)
    musicbrainz_id = models.CharField(max_length=100)
    name = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class Track(models.Model):
    _id = models.CharField(max_length=25, primary_key=True)
    title = models.CharField(max_length=500)
    playback_duration = models.FloatField()

    genres = models.ManyToManyField(Genre)
    artists = models.ManyToManyField(Artist)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
