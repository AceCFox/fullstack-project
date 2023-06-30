from django.contrib.auth.models import User, Group
from rest_framework import serializers
from . import models


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ["url", "username", "email", "groups"]


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ["url", "name"]

class LessonSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Lesson
        fields = ["location", "experience", "position", "goals", "date"]