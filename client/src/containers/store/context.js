import React from 'react'

const JobsContext = React.createContext({
  jobs: [
    {
      id: 1,
      title: 'Graphic Designer',
      company: 'Microsoft',
      jobtype: 'permanent',
      location: 'Abu Dhabi, Qatar',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id scelerisque metus. Aliquam in posuere magna. Proin iaculis, turpis in commodo mattis, mi odio dictum lorem, vel tristique nibh lacus sed lacus. In ac mi euismod, euismod augue sit amet, feugiat mauris. Maecenas eget mauris metus. Nulla dictum cursus sodales.',
      expires: '10 Feb 2019',
      application: 'test@mail.com'
    },
    {
      id: 2,
      title: 'Web Designer',
      company: 'Facebooks',
      jobtype: 'Contract',
      location: 'Doha, Qatar',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id scelerisque metus. Aliquam in posuere magna. Proin iaculis, turpis in commodo mattis, mi odio dictum lorem, vel tristique nibh lacus sed lacus. In ac mi euismod, euismod augue sit amet, feugiat mauris. Maecenas eget mauris metus. Nulla dictum cursus sodales.',
      expires: '18 Jan 2019',
      application: 'me@mail.com'
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'Yahoo',
      jobtype: 'Contract',
      location: 'Nairobi, Kenya',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id scelerisque metus. Aliquam in posuere magna. Proin iaculis, turpis in commodo mattis, mi odio dictum lorem, vel tristique nibh lacus sed lacus. In ac mi euismod, euismod augue sit amet, feugiat mauris. Maecenas eget mauris metus. Nulla dictum cursus sodales.',
      expires: '11 Jan 2019',
      application: 'me@mail.com'
    }
  ]
})

export default JobsContext
