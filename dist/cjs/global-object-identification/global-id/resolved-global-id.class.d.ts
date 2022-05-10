export interface RelayResolvedGlobalId {
    type: string;
    id: string;
}
export declare class ResolvedGlobalId implements RelayResolvedGlobalId {
    type: string;
    id: string;
    constructor(args: RelayResolvedGlobalId);
    toString(): string;
    toNumber(): number;
}
export declare const typeResolvedGlobalId: () => typeof ResolvedGlobalId;
export declare const typeResolvedGlobalIds: () => (typeof ResolvedGlobalId)[];
