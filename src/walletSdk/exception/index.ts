export class ServerRequestFailedError extends Error {
    constructor(e) {
        super(`server request failed with error: ${e}`);
        Object.setPrototypeOf(this, ServerRequestFailedError.prototype);
    }
}

export class AssetNotSupportedError extends Error {
    constructor(type, assetCode) {
        super(`asset ${assetCode} not supported for ${type}`);
        Object.setPrototypeOf(this, AssetNotSupportedError.prototype);
    }
}

export class InvalidMemoError extends Error {
    constructor() {
        super(`Memo ID must be a positive integer`);
        Object.setPrototypeOf(this, InvalidMemoError.prototype);
    }
}

export class ClientDomainWithMemoError extends Error {
    constructor() {
        super(`Client domain cannot be used with memo`);
        Object.setPrototypeOf(this, ClientDomainWithMemoError.prototype);
    }
}
