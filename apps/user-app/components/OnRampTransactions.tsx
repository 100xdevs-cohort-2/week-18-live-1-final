import { Card } from '@repo/ui/card'

const getStatement = (status: string) => {
  if (status === 'Success') {
    return 'Received INR'
  } else if (status === 'Processing') {
    return 'To be Received INR'
  } else {
    return 'Failed'
  }
}

export const OnRampTransactions = ({
  transactions,
  title = 'Recent wallet Transactions',
}: {
  transactions: {
    time: Date
    amount: number
    // TODO: Can the type of `status` be more specific?
    status: string
    provider: string
  }[]
  title?: string
}) => {
  if (!transactions.length) {
    return (
      <Card title={title}>
        <div className="text-center pb-8 pt-8">No {title}</div>
      </Card>
    )
  }

  return (
    <Card title={title}>
      <div className="pt-2 flex flex-col gap-4">
        {transactions.map((t) => (
          <>
            <div className="flex justify-between">
              <div>
                <div className="text-sm">{getStatement(t.status)}</div>
                <div className="text-slate-600 text-xs">
                  {t.time.toDateString()}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                + Rs {t.amount / 100}
              </div>
            </div>
          </>
        ))}
      </div>
    </Card>
  )
}