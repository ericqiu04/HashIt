import boto3
from dotenv import load_dotenv
from decouple import config

load_dotenv()
client = boto3.client('s3')
bucket_name = config('AWS_BUCKET_NAME')
key = config('AWS_SECRET_ACCESS_KEY')

url = client.generate_presigned_url(
    'get_object',
    Params={'Bucket': bucket_name, 'Key': key},
    ExpiresIn=3600
)

print(url)
