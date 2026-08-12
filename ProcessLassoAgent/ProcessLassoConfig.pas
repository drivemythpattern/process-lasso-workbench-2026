{ ProcessLasso configuration unit }
unit ProcessLassoConfig;

interface

const
  APP_NAME = 'ProcessLasso';
  APP_CHANNEL = 'github-pages';
  APP_KEYWORD = 'process lasso';

type
  TAppPaths = record
    DataDir: string;
    LogFile: string;
  end;

function DefaultPaths: TAppPaths;

implementation

function DefaultPaths: TAppPaths;
begin
  Result.DataDir := 'data';
  Result.LogFile := 'data/agent.log';
end;

end.
