from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string

def send_html_email(subject, plain_message, template_name, context, recipient_list, attachments=None):
    try:
        html_message = render_to_string(template_name, context)
        email = EmailMultiAlternatives(
            subject=subject,
            # body='',
            body=plain_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=recipient_list,
        )
        email.attach_alternative(html_message, "text/html")

        if attachments:
            for attachment in attachments:
                email.attach(attachment.name, attachment.read(), attachment.content_type)

        email.send(fail_silently=False)
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False
