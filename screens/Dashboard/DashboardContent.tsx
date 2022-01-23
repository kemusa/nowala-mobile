const statusInit = [
  { title: 'Sign up for first project 😀', complete: true },
  { title: 'Money recieved', complete: true },
  { title: 'Money arrived Sierra Leone', complete: true },
  { title: 'Solar Kit installation complete', complete: false },
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
    projectId: 'ywpYsNv5F0Gv8YBtVQBX',
    progress: statusInit,
  },
];

export { projectsInit };
