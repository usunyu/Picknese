from django.db.models import Q

from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response

from message.models import Message, MessageReply

from userprofile.serializers import UserSerializer

class MessageList(APIView):
    """
    MessageList APIView\n
    Retrieve Message based on Request User\n
    message/api/list/ => MessageList.as_view() 
    """
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        user = request.user
        # retrieve all the messages the user send or receive
        result = []
        messages = Message.objects.filter(Q(receiver=user) | Q(sender=user)).order_by('-created')

        for message in messages:
            sender_serializer = UserSerializer(message.sender)
            receiver_serializer = UserSerializer(message.receiver)
            # # retrieve all the reply for the messages
            # replies = MessageReply.objects.filter(message_target=message).order_by('-created')
            # replies_json = []
            # for reply in replies:
            #     replies.append({
            #         'id'        : reply.id,
            #         'sender'    : reply.sender.id,
            #         'receiver'  : reply.receiver.id,
            #         'message'   : reply.message,
            #         'unread'    : reply.unread,
            #         'created'   : reply.created,
            #     })
            result.append({
                'id'        : message.id,
                'sender'    : sender_serializer.data,
                'receiver'  : receiver_serializer.data,
                'message'   : message.message,
                'unread'    : False,
                'created'   : message.created,
            })

        return Response(result, status=status.HTTP_200_OK)

# retrive all the replies based on message

