from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path
from quiz.consumer import QuizConsumer

application = ProtocolTypeRouter({
    "websocket": URLRouter([
        path("ws/quiz/", QuizConsumer.as_asgi()),
    ])
})
