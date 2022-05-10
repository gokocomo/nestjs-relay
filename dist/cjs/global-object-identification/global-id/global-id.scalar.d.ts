import { CustomScalar } from '@nestjs/graphql';
import { ValueNode } from 'graphql';
import { ResolvedGlobalId } from './resolved-global-id.class';
export declare class GlobalIdScalar implements CustomScalar<string, ResolvedGlobalId> {
    parseValue(value: unknown): ResolvedGlobalId;
    serialize(value: unknown): string;
    parseLiteral(ast: ValueNode): ResolvedGlobalId;
}
