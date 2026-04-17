import type { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
   ...config,
   name: 'Bare',
   slug: 'bare',
});
