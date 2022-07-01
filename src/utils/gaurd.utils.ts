import { TMethod, TPath } from '../models/models.loader';

/**
 * It validate request Method is verified in our services.
 * 
 * @param `method` string
 * @returns `target` Method | null
 */
export function unhandleMethodGaurd(method: string): TMethod | null {
    
    const targets: TMethod[] = [ 'GET', 'PUT', 'POST', 'PATCH', 'DELETE' ];
    const target: TMethod | null = targets.find(v => v === method) ?? null;
    return target;

}

/**
 * It validate request Path is verified in our services.
 * 
 * @param `path` string
 * @returns `target` Path | null
 */
export function unhandlePathGuard(path: string): TPath | null {

    const paths: TPath[] = [ '/auth' ];
    const target: TPath | null = paths.find(v => v === path) ?? null;
    return target;

}