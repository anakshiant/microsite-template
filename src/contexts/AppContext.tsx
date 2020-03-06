import React from 'react';
import config from '../config.json';

type AppContextType = {
  headerBackgroundColor: string;
  micrositeImageUrl: string;
  apiHost: string;
  primaryColor: string;
  host: string;
};

const AppContext = React.createContext<AppContextType>({
  ...config,
});

export const AppConsumer: React.Consumer<AppContextType> = AppContext.Consumer;
export const AppProvider: React.Provider<AppContextType> = AppContext.Provider;

export default AppContext;
