from django.core.mail import send_mail
from django.template.loader import render_to_string

def send_email_to_employee(employee_email, subject, message):
    send_mail(
        subject=subject,
        message=message,
        from_email=None,  # Use default sender from settings.py
        recipient_list=[employee_email],
        fail_silently=False,
    )


def send_html_email(subject, html_message, recipient_list):
    try:
        send_mail(
            subject=subject,
            message='',  # Leave empty if using HTML content
            from_email=None,  # Use default sender from settings.py
            recipient_list=recipient_list,
            html_message=html_message,  # HTML content
            fail_silently=False,
        )
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False