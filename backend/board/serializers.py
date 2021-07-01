from rest_framework import serializers
from .models import BoardVO as board

class BoardSerializer(serializers.Serializer):
    title = serializers.CharField()
    content = serializers.CharField()

    class Meta:
        model = board
        fields = '__all__'

    def create(self, validated_date):
        return board.objects.create(**validated_date)
