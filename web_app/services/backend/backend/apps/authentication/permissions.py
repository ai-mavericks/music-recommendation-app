from rest_framework import permissions

from .utils import get_auth_user_id_from_request


class IsCreator(permissions.BasePermission):
    message = "You must be the owner of this profile."

    def has_object_permission(self, request, view, obj):
        user_id = get_auth_user_id_from_request(request)
        return obj.id == user_id
