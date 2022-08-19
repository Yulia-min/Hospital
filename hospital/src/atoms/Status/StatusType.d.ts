export type StatusType = {
  variant:
    | 'complete'
    | 'incomplete'
    | 'unassigned'
    | 'assigned'
    | 'pending'
    | 'declined'
    | 'competed'
  type: 'emr' | 'visits'
  children: React.ReactNode
}
