from rest_framework_jwt.utils import jwt_decode_handler


def get_auth_user_id_from_request(request):
    token = request.META.get("HTTP_AUTHORIZATION", "").split()[1]
    payload = jwt_decode_handler(token)
    print(payload)
    return payload.get("user_id")
