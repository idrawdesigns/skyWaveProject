export default function reducer(state, action) {
  switch (action.type) {
    case 'VIEW_JOB': {
      return {
        ...state,
        id: action.payload.id,
        application: action.payload.application,
        company: action.payload.company,
        jobtype: action.payload.jobtype,
        location: action.payload.location,
        title: action.payload.title,
        description: action.payload.description,
        expires: action.payload.expires
      }
    }
    default:
      return state
  }
}
