from rest_framework import serializers
from . import models

class LessonSerializer(serializers.HyperlinkedModelSerializer):
   location = serializers.CharField()
   experience = serializers.BooleanField()
   position= serializers.CharField()
   goals = serializers.CharField()
   date = serializers.DateField()