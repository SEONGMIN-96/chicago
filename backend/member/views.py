from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse, HttpResponse, Http404
from rest_framework.response import Response
from rest_framework import status
from member.models import MemberVO
from member.serializers import MemberSerializer
from rest_framework.decorators import api_view, parser_classes
from rest_framework import serializers
from icecream import ic


@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([JSONParser])
def members(request):
    print('-----여기까지 왔다--------')
    if request.method == 'GET':
        all_members = MemberVO.objects.all()
        ic(all_members)
        serializer = MemberSerializer(all_members, many=True)
        ic(type(serializer.data))
        ic(serializer.data)
        return JsonResponse(serializer.data, safe=False)
        '''
        data = serializers.serialize('json', all_members)
        ic(data)
        return Response(data=data, status=201)
        '''
        '''
        ic(all_members)
        serializer = MemberSerializer(all_members, many=True)
        ic(type(serializer.data))
        ic(serializer.data)
        return JsonResponse(serializer.data, safe=False)
        '''
    elif request.method == 'POST':
        new_member = request.data['body']
        ic(new_member)
        serializer = MemberSerializer(data=new_member)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def member(request):
    if request.method == 'GET':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = request.data['body']
        pk = data['username']
        user_input_password = data['password']
        member = MemberVO.objects.get(pk=pk)
        # member = self.get_object(pk)
        if(member is not None):
            ic(member)
            if user_input_password == member.password:
                serializer = MemberSerializer(member, many=False)
                return JsonResponse(serializer.data, safe=False)
            elif user_input_password != member.password:
                print('비밀번호가 다릅니다.')
                return JsonResponse({'result': 'PASSWORD-FAIL'}, status=201)
        else:
            print('아이디가 존재하지 않습니다.')
            return HttpResponse({'result': 'USERNAME-FAIL'}, status=104)
    elif request.method == 'PUT':
        data = request.data['body']
        update_member = data['member']
        ic(update_member)
        pk = update_member['username']
        member = MemberVO.objects.get(pk=pk)
        user_change_password = update_member['password']
        ic(user_change_password)
        serializer = MemberSerializer(member, data=data['member'], partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'result':f'Update Success, {serializer.data.get("name")}'}, status=201)
    elif request.method == 'DELETE':
        serializer = MemberSerializer()
        return JsonResponse(serializer.data, safe=False)