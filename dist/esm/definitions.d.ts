export interface IconOptions {
    /**
     * Name of alternate icon to set
     */
    name: string;
    /**
     * Name of icons to disable. This is not used for iOS, but required for Android.
     * @since 3.1.0
     */
    disable?: string[];
    /**
     * Flag controlling the in app notification which shows after icon is changed. (iOS)
     */
    suppressNotification: boolean;
}
export interface ResetOptions {
    /**
     * Flag controlling the in app notification which shows after icon is changed (iOS).
     */
    suppressNotification: boolean;
    /**
     * Name of icons to disable. This is not used for iOS, but required for Android.
     * @since 3.1.1
     */
    disable?: string[];
}
export interface AppIconPlugin {
    /**
     * Checks if changing the app icon is supported. (iOS only)
     * @since 1.0.0
     */
    isSupported(): Promise<{
        value: boolean;
    }>;
    /**
     * Gets the name of currently set alternate icon. If original icon is set, returns null.
     * @since 1.0.0
     */
    getName(): Promise<{
        value: string | null;
    }>;
    /**
     * Changes app icon to specified alternate.
     * @since 1.0.0
     */
    change(options: IconOptions): Promise<void>;
    /**
     * Reverts app icon to original.
     * @since 1.0.0
     */
    reset(options: ResetOptions): Promise<void>;
}
