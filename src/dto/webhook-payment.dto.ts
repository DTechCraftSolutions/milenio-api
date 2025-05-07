export class WebhookPaymentDto {
  event: string;
  payment: {
    id: string;
    dateCreated: string;
    customer: string;
    subscription: string;
    installment: string;
    paymentLink: string;
    value: number;
    netValue: number;
    originalValue: number;
    interestValue: number;
    description: string;
    billingType: string;
    status: string;
    dueDate: string;
    originalDueDate: string;
    paymentDate: string;
    clientPaymentDate: string;
    invoiceUrl: string;
    invoiceNumber: string;
    externalReference: string;
    deleted: boolean;
    anticipated: boolean;
    anticipable: boolean;
    creditDate: string;
    estimatedCreditDate: string;
    transactionReceiptUrl: string;
    nossoNumero: string;
    bankSlipUrl: string;
    lastInvoiceViewedDate: string;
    lastBankSlipViewedDate: string;
    discount: {
      value: number;
      limitDate: string;
      dueDateLimitDays: number;
      type: string;
    };
    fine: {
      value: number;
      type: string;
    };
    interest: {
      value: number;
      type: string;
    };
    postalService: boolean;
    custody: string;
    refunds: any[];
  };
} 