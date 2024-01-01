export interface Receipt{
  id: number;
  purpose: string;
  date: Date;
}

export interface Email {
  message: string;
  receipt: Receipt;
}

export class ProcessError extends Error {
  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, ProcessError);
  }
}

export interface IReimbursement {
  addReceipt(content: string): Promise<string[]>;

  removeReceipt(multipleContents: number[]): any[];

  listReceipts(): Promise<Receipt[]>;

  sendEmail(multipleReceipts: Receipt[]): any[];

  listEmails(): Promise<any[]>;

  editEmailMessage(): string;
}
