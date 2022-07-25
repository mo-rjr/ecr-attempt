# ecr-attempt

## pipeline.yml
deploy pipeline.yml to build a little docker container, put it into ECR, and then deploy it as a lambda from ECR

* v1 was basic

* v2 adds playwright, copied from [https://github.com/lari/playwright-aws-lambda-example](https://github.com/lari/playwright-aws-lambda-example)




for proper use, would need:
* pipeline's kms key to encrypt on build bucket and in ECR
* permissions so ECR can be used by non-management account
* perhaps better versioning of image than 'latest'
* obviously a real Node app would require more complex dockerfile

## pipeline-no-ecr.yml and lambda-deployment-no-ecr.yml do not work
I think it might require use of SAM cli 
to do the new thing where you specify Docker metadata on the template.
See [ImageUri info for AWS::Serverless::Function](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-resource-function.html#sam-function-imageuri)
(The error I get is saying it's invalid without an ImageUri value.)
Also see [buildspec.yml using `sam deploy` command](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/deploying-using-codepipeline.html)

But anyway, I'm not sure it would let us build once and deploy to many tiers? 
So it might be a red herring anyway

