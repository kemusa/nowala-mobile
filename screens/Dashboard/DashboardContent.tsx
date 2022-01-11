const statusInit = [
  { title: 'Sign up for first project 😀', complete: true },
  { title: 'Money recieved', complete: false },
  { title: 'Money enroute to Sierra Leone', complete: false },
  { title: 'Solar Kit purchased', complete: false },
  { title: 'Solar Kit installed in home', complete: false },
  { title: 'Solar Kit in use', complete: false },
  { title: 'Payments started', complete: false },
];

const projectsInit = [
  {
    asset: 'solar kits',
    unitCost: 0,
    units: 0,
    interest: 0.1,
    collected: 0,
    currency: 'SLL',
    progress: statusInit,
  },
];

export { statusInit, projectsInit };
