import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class ApiKeyAuthGuard extends AuthGuard('Apikey') {
	// override nest nest built-in getRequest
	// ref: https://stackoverflow.com/questions/70644923/nestjs-passport-typeerror-cannot-read-properties-of-undefined-reading-logi
	getRequest(context: ExecutionContext) {
		const ctx = GqlExecutionContext.create(context);

		return ctx.getContext().req;
	}
}
