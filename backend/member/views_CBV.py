from django.shortcuts import render
from django.urls import path
from . import views_CBV
# Create your views here.

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from member.models import MemberVO
from member.serializers import MemberSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from icecream import ic
from django.http import Http404
from rest_framework import status


class Members(APIView):
    def post(self, request):
        data = request.data['test']
        ic(type(data))
        # data = JSONParser().parse(request)
        serializer = MemberSerializer(data=data)
        ic(type(serializer))
        if serializer.is_valid():
            serializer.save()
            return Response({'result':f'Welcome, {serializer.data.get("name")}'}, status=201)
        ic(serializer.errors)
        return Response(serializer.errors, status=400)




'''
class MemberList(APIView):
    def get(self, request, format=None):
        member = MemberVO.objects.all()
        serializer = MemberSerializer(member, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



'''
class MemberDetail(APIView):
    def get_object(self, pk):
        try:
            return MemberVO.objects.get(pk=pk)
        except MemberVO.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        memeber = self.get_object(pk)
        serializer = MemberSerializer(memeber)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        memeber = self.get_object(pk)
        serializer = MemberSerializer(memeber, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_bad_REQUEST)

    def delete(self, request, pk, format=None):
        memeber = self.get_object(pk)
        memeber.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@csrf_exempt
def member_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':

        serializer = MemberSerializer()
        if serializer.is_valid():

            serializer.save()
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = MemberSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)