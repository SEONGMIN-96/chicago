from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.Serializer):
    username = serializers.models.CharField()
    password = serializers.CharField()
    name = serializers.CharField()
    email = serializers.EmailField()
    class Meta:
        model = Member
        fields = ['username', 'password', 'name', 'email']

    def create(self, validated_date):
        return Member.objects.create(**validated_date)

