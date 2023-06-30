from django.db import models
from django.utils import timezone
import datetime

class Lesson (models.Model):
    location = models.CharField(max_length=50)
    experience = models.BooleanField(default=False)
    position = models.CharField(max_length=20)
    goals = models.CharField(max_length=500, null=True, blank=True)
    date = models.DateField("lesson date")
    def __str__(self):
        return self.location
    def coming_up(self):
        return self.date> timezone.now() and self.date<= timezone.now() + datetime.timedelta(days=5) 
