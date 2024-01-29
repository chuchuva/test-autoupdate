import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.testautoupdate1',
  appName: 'Test Autoupdate',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
