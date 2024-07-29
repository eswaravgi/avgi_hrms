from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string

def send_html_email(subject, plain_message, template_name, context, recipient_list, attachments=None):
    try:
        # Render HTML message
        html_message = render_to_string(template_name, context)
        
        # Create email instance
        email = EmailMultiAlternatives(
            subject=subject,
            body=plain_message,
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=recipient_list,
        )
        email.attach_alternative(html_message, "text/html")

        # Attach files if any
        if attachments:
            for attachment in attachments:
                # Read attachment content
                attachment.seek(0)  # Ensure file cursor is at the start
                attachment_content = attachment.read()
                
                # Ensure the content is not empty
                if attachment_content:
                    email.attach(attachment.name, attachment_content, attachment.content_type)
                else:
                    # Handle or log empty attachment content if necessary
                    print(f"Warning: Attachment content is empty for file {attachment.name}")

        # Send email
        email.send(fail_silently=False)
        return True
    except Exception as e:
        print(f"Error sending email: {e}")
        return False