
export declare global {
  type navigationProps = {
    latitude: number
    longitude: number
    estacao: string
    linhas: string[]
    Funcionamento: string
  };
}


export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: any;
      monitor: { local: navigationProps };
      station: { local: navigationProps };
    }
  }
}
