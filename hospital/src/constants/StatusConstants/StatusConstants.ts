export const VARIANTS = {
  PENDING: 'pending',
  COMPITED: 'competed',
  DECLINED: 'declined',
  ASSIGNED: 'assigned'
}
export const STATUS_VARIANTS = {
  'In progress': VARIANTS.PENDING,
  Pending: VARIANTS.PENDING,
  'Request completed': VARIANTS.COMPITED,
  'Visit completed': VARIANTS.COMPITED,
  Declined: VARIANTS.DECLINED,
  Assigned: VARIANTS.ASSIGNED
}
