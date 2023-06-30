from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from. import models
from .serializers import *

# Create your views here.
@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'GET':
         return HttpResponse(models.Lesson.objects.all())
    elif request.method == 'POST':
        serializer = LessonSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
         