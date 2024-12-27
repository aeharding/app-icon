import { WebPlugin } from '@capacitor/core';
import type { AppIconPlugin } from './definitions';
export declare class AppIconWeb extends WebPlugin implements AppIconPlugin {
    isSupported(): Promise<{
        value: boolean;
    }>;
    getName(): Promise<{
        value: string | null;
    }>;
    change(): Promise<any>;
    reset(): Promise<any>;
}
