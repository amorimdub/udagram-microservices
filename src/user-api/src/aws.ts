import AWS from 'aws-sdk';
import { config } from './config/config';

const c = config.aws;

if (c.aws_profile !== "DEPLOYED") {
  var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
  AWS.config.credentials = credentials;
}

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: c.aws_region,
  params: { Bucket: c.aws_media_bucket }
});

export function getGetSignedUrl(key: string): string {

  const signedUrlExpireSeconds = 60 * 5

  const url = s3.getSignedUrl('getObject', {
    Bucket: c.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds
  });

  return url;
}

export function getPutSignedUrl(key: string) {

  const signedUrlExpireSeconds = 60 * 5

  const url = s3.getSignedUrl('putObject', {
    Bucket: c.aws_media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds
  });

  return url;
}
