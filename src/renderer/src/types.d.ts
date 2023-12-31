interface DownloaderConfig {
  threads?: number;
  output?: string;
  tempDir?: string;
  key?: string;
  verbose?: boolean;
  cookies?: string;
  headers?: string | string[];
  retries?: number;
  proxy?: string;
  format?: string;
  noMerge?: boolean;
  keep?: boolean;
  keepEncryptedChunks?: boolean;
  chunkNamingStrategy?: NamingStrategy;
  cliMode?: boolean;
}

declare interface ArchiveDownloaderConfig extends DownloaderConfig {
  slice?: string;
}

declare interface LiveDownloaderConfig extends DownloaderConfig {}

interface IFrontOptions {
  output: string;
  key?: string;
  cookies?: string;
  slice?: string;
}

interface Isettings {
  threads?: number;
  tempDir?: string;
  verbose?: boolean;
  retries?: number;
  proxy?: string;
  noMerge?: boolean;
  keep?: boolean;
  keepEncryptedChunks?: boolean;
  defaultDownloadPath?: string;
  enableProxy?: boolean;
}

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  api: any;
}

interface IchunkInfo {
  taskname: string;
  finishedChunksCount: number;
  totalChunksCount: number;
  chunkSpeed: number;
  ratioSpeed: number;
  eta: string;
}
