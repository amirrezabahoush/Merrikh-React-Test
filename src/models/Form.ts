export enum EMailFrequencyEnums {
  WEEKLY = 'WEEKLY',
  DAILY = 'DAILY'
}

export type FormResponseModel = {
  collectUserInfoEnabled: boolean;
  conversationClearEnabled: boolean;
  conversationDownloadsEnabled: boolean;
  conversationTranscripts: {
    emailEnabled: boolean;
    emailAddress: string;
    emailFrequency: `${EMailFrequencyEnums}`;
  };
  initMessage: boolean;
  showLiveChatIcon: boolean;
};

export type FormValues = {
  collectUserInfoEnabled: boolean;
  conversationClearEnabled: boolean;
  conversationDownloadsEnabled: boolean;
  emailEnabled: boolean;
  emailAddress: string;
  emailFrequency: `${EMailFrequencyEnums}`;
  initMessage: boolean;
  showLiveChatIcon: boolean;
};