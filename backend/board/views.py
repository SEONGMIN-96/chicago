from django.shortcuts import render

from django.http import JsonResponse
from rest_framework.views import APIView
from board.serializers import BoardSerializer
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from icecream import ic

# Create your views here.

class Boards(APIView):
    def post(self, request):
        data = request.data['body']
        ic(data)
        serializer = BoardSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'result':f'Success, {serializer.data.get("title")}'}, status=201)
        ic(serializer.errors)
        return Response(serializer.errors, status=400)