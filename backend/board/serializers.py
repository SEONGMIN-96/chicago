from rest_framework import serializers
from board.models import Post, LANGUAGE_CHOICES, STYLE_CHOICES

class BoardSerializer(serializers.Serializer):
    username = serializers.IntegerField()
    title = serializers.IntegerField()
    code = serializers.CharField()
    linenos = serializers.BooleanField()
    language = serializers.ChoiceField()
    style = serializers.ChoiceField()

    def create(self, validated_date):
        return board.objects.create(**validated_date)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.code = validated_data.get('code', instance.code)
        instance.linenos = validated_data.get('linenos', instance.linenos)
        instance.language = validated_data.get('language', instance.language)
        instance.style = validated_data.get('style', instance.style)
        instance.save()
        return instance