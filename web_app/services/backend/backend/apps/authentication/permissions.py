from rest_framework import permissions


class OwnerProfilePermission(permissions.BasePermission):
    """object lvl permissions for owner"""

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user
