from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from member.models import MemberVO
from member.serializers import MemberSerializer
from rest_framework.decorators import api_view, parser_classes
from icecream import ic
from rest_framework.response import Response


@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([JSONParser])
def members(request):
    if request.method == 'GET':
        all_members = MemberVO.objects.all()
        serializer = MemberSerializer(all_members, many=True)
        return Response(data=serializer.data, status=201)
    elif request.method == 'POST':
        new_member = request.data['body']
        #data = JSONParser().parse(data=new_member)
        ic(new_member)
        serializer = MemberSerializer(data=new_member)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'result':f'Welcome, {serializer.data.get("name")}'}, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)

@api_view(['GET', 'PUT', 'DELETE'])
def member(request, pk):
    if request.method == 'GET':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)